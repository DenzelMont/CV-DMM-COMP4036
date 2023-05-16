-- Este archivo contiene el código del módulo Tablero
-- que contiene la lógica y el modelo de datos de 15-puzzle.

module Tablero exposing (..)

import Dict exposing (Dict)
import List
import List.Extra exposing (elemIndex)
import Random exposing (Generator)
import Random.List exposing (shuffle)


-- Definición de alias de tipos para facilitar la lectura del código
type alias Fila =
    Int

-- Para representar una columna en el tablero.
type alias Columna =
    Int

-- Para representar una posición en el tablero.
type alias Pos =
    ( Fila, Columna )

-- Para representar una casilla en el tablero.
type alias Casilla =
    Int

-- Para representar el tablero completo.
type alias Tablero =
    { tablero : Dict Pos (Maybe Casilla)
    , vacio : Pos
    }


-- Tamaño del tablero (4x4)
tamaño : Int
tamaño =
    4

-- Función para crear un tablero vacío (El que se mueve)
tableroVacio : Tablero
tableroVacio =
    { tablero = Dict.empty
    , vacio = ( 0, 0 )
    }

-- Convierte un índice en una posición fila y columna en el tablero.
indiceAPos : Int -> Pos
indiceAPos indice =
    let
        fila =
            indice // tamaño

        columna =
            remainderBy tamaño indice
    in
    ( fila, columna )


-- Lista de casillas predeterminadas en el tablero
casillasPredeterminadas : List (Maybe Casilla)
casillasPredeterminadas =
    Nothing :: List.map Just (List.range 1 (tamaño ^ 2 - 1))


-- Genera tableros aleatorios para que no se repita el orden
generador : Generator Tablero
generador =
    Random.map desdeLista (shuffle casillasPredeterminadas)
-- ^ como se discutio en clase, las funciones Rand no son realmente aleatorias, 
-- pero honestamente no sabría como más hacerlo

-- Lista de todas las posiciones en el tablero
posiciones : List Pos
posiciones =
    let
        posicionesFila : Fila -> List ( Fila, Columna )
        posicionesFila fila =
            List.map (pos fila) (List.range 0 (tamaño - 1))

        pos : Fila -> Columna -> ( Fila, Columna )
        pos fila columna =
            ( fila, columna )
    in
    List.concatMap posicionesFila (List.range 0 (tamaño - 1))

-- CConvierte el List de casillas en un tablero para el juego
desdeLista : List (Maybe Casilla) -> Tablero
desdeLista casillas =
    let
        indiceVacio =
            Maybe.withDefault 0 (elemIndex Nothing casillas)

        posicionVacia =
            indiceAPos indiceVacio

        tablero =
            List.map2 Tuple.pair posiciones casillas |> Dict.fromList
    in
    Tablero tablero posicionVacia


-- Esta función convierte el dablero tablero como List de posiciones y casilla
aLista : Tablero -> List ( Pos, Maybe Casilla )
aLista { tablero } =
    Dict.toList tablero


-- Aquí la Función un convierte el tablero en un list de casillas
aListaCasillas : Tablero -> List (Maybe Casilla)
aListaCasillas =
    aLista >> List.map Tuple.second

--Función para determinar si es posible resolver el juego
esSoluble : Tablero -> Bool
esSoluble tablero =
    let
        inversiones =
            contarInversiones (aListaCasillas tablero)

        filaVacia =
            Tuple.first tablero.vacio

        esPar : Int -> Bool
        esPar num =
            remainderBy 2 num == 0

        esImpar =
            not << esPar
    in
    if esImpar tamaño then
        esPar inversiones

    else
        (esImpar filaVacia && esPar inversiones) || (esPar filaVacia && esImpar inversiones)



-- Una inversión es cuando una casilla esta antes de otra casilla con un número menor en ella. El estado de solución tiene cero inversiones.


contarInversiones : List (Maybe Casilla) -> Int
contarInversiones casillas =
    let
        lista =
            List.filterMap identity casillas
    in
    lista
        |> List.indexedMap (\index casilla -> inversion index casilla lista)
        |> List.foldl (+) 0


inversion : Int -> Casilla -> List Casilla -> Int
inversion index casilla lista =
    List.drop (index + 1) lista
        |> List.filter (\i -> i < casilla)
        |> List.length


type Direccion
    = Arriba
    | Abajo
    | Izquierda
    | Derecha


mover : Pos -> Tablero -> Tablero
mover pos tablero =
    if pos == tablero.vacio then
        tablero

    else
        case direccionMovimiento pos tablero.vacio of
            -- Sí el movimiento no es posible, no mover nada
            Nothing ->
                tablero

            -- Si el movimiento es posible, intercambia las posiciones
            _ ->
                Tablero (intercambiar pos tablero.vacio tablero.tablero) pos



direccionMovimiento : Pos -> Pos -> Maybe Direccion
direccionMovimiento ( casillaX, casillaY ) ( vacioX, vacioY ) =
    if casillaX == vacioX then
        let
            diff =
                casillaY - vacioY
        in
        if diff == 1 then
            Just Izquierda

        else if diff == -1 then
            Just Derecha

        else
            Nothing

    else if casillaY == vacioY then
        let
            diff =
                casillaX - vacioX
        in
        if diff == 1 then
            Just Arriba

        else if diff == -1 then
            Just Abajo

        else
            Nothing

    else
        Nothing


intercambiar : comparable -> comparable -> Dict comparable v -> Dict comparable v
intercambiar k1 k2 dict =
    case ( Dict.get k1 dict, Dict.get k2 dict ) of
        ( Just val1, Just val2 ) ->
            Dict.insert k1 val2 (Dict.insert k2 val1 dict)

        _ ->
            dict