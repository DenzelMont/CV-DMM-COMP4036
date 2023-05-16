module Main exposing (main)

--Importamos lo necesario, incluyendo el Tablero.elm 
import Tablero exposing (Tablero)
import Random
import Html exposing (Html, div, text)
import Browser
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)

-- Aquí se configura lo principal del programa // Porque elm tiene que ser tan complicado? D,:
main : Program () Modelo Msg
main =
    Browser.element
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }

-- Inicialización que crea el estado inicial del modelo y genera un tablero aleatorio
init : () -> ( Modelo, Cmd Msg )
init _ =
    ( { tablero = Tablero.tableroVacio
      , inicializado = False
      , titulo = "Elm 15"
      }
    , Random.generate TableroGenerado Tablero.generador
    )

-- Definición de los msg que pueden ser utilizados en el juego
type Msg
    = TableroGenerado Tablero
    | Mover Pos

-- Definición del modelo
type alias Modelo =
    { tablero : Tablero
    , inicializado : Bool
    , titulo : String
    }

-- Función para Actualizar los msg y el modelo
update : Msg -> Modelo -> ( Modelo, Cmd Msg )
update msg modelo =
    case msg of
        TableroGenerado tablero ->
            ( { modelo | tablero = tablero, inicializado = True }
            , Cmd.none
            )

        Mover pos ->
            ( { modelo | tablero = Tablero.mover pos modelo.tablero }
            , Cmd.none
            )

-- La visualización que crea lo del HTML a partir de como esta el modelo
view : Modelo -> Html Msg
view modelo =
    if modelo.inicializado then
        Html.div []
            [ Tablero.view modelo.tablero Mover
            , Html.h1 [] [ Html.text modelo.titulo ]
            ]

    else
        Html.div []
            [ Html.text "Cargando..."
            ]

--Se definen las suscripciones (Sub.none indica que no hay suscripciones)
subscriptions : Modelo -> Sub Msg
subscriptions _ =
    Sub.none

-- Punto de entrada principal del juego en Elm, configura funciones de inicialización, vista, actualización y suscripciones.
main : Program () Modelo Msg
main =
    Browser.element
        { init = init
        , view = vista
        , update = actualizar
        , subscriptions = suscripciones
        }

-- Inicialización que crea el modelo inicial y devuelve el comando que genera un tablero "aleatorio" (Lo discutido en clase con RAND)
init : () -> ( Modelo, Cmd Msg )
init _ =
    ( { tablero = Tablero.tableroVacio
      , inicializado = False
      , titulo = "Elm 15"
      }
    , Random.generate TableroGenerado Tablero.generador
    )

--  Actualización que maneja los msg y actualiza el estado del modelo en función del msg recibido.
actualizar : Msg -> Modelo -> ( Modelo, Cmd Msg )
actualizar msg modelo =
    case msg of
        TableroGenerado tablero ->
            if Tablero.esSolucionable tablero then
                ( { modelo | tablero = tablero, inicializado = True }
                , Cmd.none
                )

            else
                ( modelo, Random.generate TableroGenerado Tablero.generador )

        Mover pos ->
            ( { modelo | tablero = Tablero.mover pos modelo.tablero }
            , Cmd.none
            )

-- Define como se ve el juego (tablero) basandose en el estado del modelo.
vista : Modelo -> Html Msg
vista modelo =
    div [ class "container" ]
        [ if not modelo.inicializado then
            div [] [ text "Generando tablero" ]

          else
            vistaTablero modelo
        ]

-- Muestra el tablero del juego.
vistaTablero : Modelo -> Html Msg
vistaTablero modelo =
    let
        tamanoTablero =
            "calc(var(--cell-size) * " ++ String.fromInt Tablero.tamano ++ " + 2px)"

        lista =
            Tablero.aLista modelo.tablero
    in
    div [ class "tablero", style "width" tamanoTablero, style "height" tamanoTablero ] (List.map (vistaCelda modelo) lista)

-- Muestra las casillas del tablero
vistaCelda : Modelo -> ( Tablero.Pos, Maybe Tablero.Casilla ) -> Html Msg
vistaCelda modelo ( pos, casilla ) =
    let
        numeroCelda =
            case casilla of
                Just n ->
                    String.fromInt n

                Nothing ->
                    ""

        claseCss =
            "casilla "
                ++ (if pos == modelo.tablero.vacio then
                        "vacio"

                    else
                        ""
                   )
    in
    div
        [ class claseCss
        , onClick (Mover pos)
        ]
        [ text numeroCelda ]