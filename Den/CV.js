// Definición de la clase CV
class CV {
  // Constructor para inicializar los datos del CV
  constructor(nombre, email, telefono, experienciaP, cursosRelevantes, edu, habilidadesT, lang, reconocimientos) {
    this.nombre = nombre; // Mi nombre jaj
    this.email = email; // Mi correo electronico
    this.telefono = telefono; // Mi Teléfono
    this.experienciaP = experienciaP; // Experiencia profesional del candidato
    this.cursosRelevantes = cursosRelevantes; // Cursos relevantes que el candidato ha tomado
    this.edu = edu; // Información de educación del candidato
    this.habilidadesT = habilidadesT; // Habilidades técnicas del candidato
    this.lang = lang; // Idiomas que habla el candidato
    this.reconocimientos = reconocimientos; // Reconocimientos obtenidos por el candidato
  }

   // Funciones getter para obtener los datos del CV
  getnombre() { // Función para obtener el nombre
    document.writeln('<div id=' + '"' + 'contenido' + '"' + '><center><body style=background-color:f6f1de;><h1><b>' + this.nombre + ' </b></h1>');
  }

 // Y así sucesivamente para el resto de los datos...
  
 getEmail() {
    document.writeln(this.email);
    document.write(' | ');
  }

  gettelefono() {
    document.writeln(this.telefono);
    document.writeln('<hr>');
  }

  getexperienciaP() {
    document.writeln('<h2><b>Professional Experience </b></h2>');
    for (let i = 0; i < this.experienciaP.length; i++) {
      document.writeln(this.experienciaP[i] + '<br>');
    }
    document.writeln('<hr>');
  }

  getCour() {
    document.writeln('<h2><b>Relevant Coursework</b></h2><br>' + this.cursosRelevantes + '<hr>');
  }

  gethabilidadesT() {
    document.writeln('<h2><b>Technical Skills & Tools</b></h2>');
    for (let i = 0; i < this.habilidadesT.length; i++) {
      document.writeln(this.habilidadesT[i] + '<br>');
    }
    document.writeln('<hr>');
  }

  getedu(is_last = false) {
    if (is_last == false) {
      document.writeln('<h2><b>Education </b></h2>');
      for (let i = 0; i < this.edu.length; i++) {
        document.writeln(this.edu[i] + '<br>');
      }
      document.writeln('<hr>');
    }
    if (is_last) {
      document.writeln('<h2><b>Education </b></h2>');
      for (let i = 0; i < this.edu.length; i++) {
        document.writeln(this.edu[i] + '<br>');
      }
      document.writeln('</div>');
    }
  }

  getlang(last = true) {
    if (last) {
      document.writeln('<div class="lang"><h2><b>Languages</b></h2>');
      for (let i = 0; i < this.lang.length; i++) {
        document.writeln(this.lang[i] + '<br>');
      }
      document.writeln('<hr>');

      document.writeln('</div>');
      document.write('</center>');
      document.write('</body>\n');
      document.writeln('</div>');

    }
  }

 // Funciones setter para establecer los datos del CV
  setnombre(nombre) { // Función para establecer el nombre
    this.nombre = nombre;
  }

  // Y así sucesivamente para el resto de los datos...

  setEmail(email) {
    this.email = email;
  }

  settelefono(telefono) {
    this.telefono = telefono;
  }

  setexperienciaP(ed) {
    this.experienciaP = ed;
  }

  setCour(cursosRelevantes) {
    this.cursosRelevantes = cursosRelevantes;
  }

  sethabilidadesT(exp) {
    this.habilidadesT = exp;
  }

  setlang(lang) {
    this.lang = lang;
  }

  setreconocimientos(reconocimientos) {
    this.reconocimientos = reconocimientos;
  }

   // Función para mostrar los datos del CV
  show(include_nombre = true, include_email = true, include_telefono = true, include_obj = true, include_experienciaP = true, include_exp = true, include_abil = true, include_lang = true, include_reconocimientos = true, last_lang = true) {
    if (include_nombre) {
      this.getnombre();
    }
     // Y así sucesivamente para el resto de los datos...
    if (include_email) {
      this.getEmail();
    }
    if (include_telefono) {
      this.gettelefono();
    }
    if (include_obj) {
      this.getCour();
    }
    if (include_exp) {
      this.gethabilidadesT();
    }
    if (include_experienciaP) {
      this.getexperienciaP();
    }
    if (include_abil) {
      this.getedu();
    }
    if (include_lang) {
      this.getlang(last_lang);
    }
    if (include_reconocimientos) {
      document.writeln('<h2><b>Awards</b></h2>');
      
      for (let i = 0; i < this.reconocimientos.length; i++) {
        document.writeln(this.reconocimientos[i] + '<br>');
      }
      

    }
  }
}


const nombre = 'Denzel Montes-Melendez';
const email = 'denzel.montes@upr.edu';
const telefono = '(787) 371-7499';
const experienciaP = ['Administrative Assistant | University of Puerto Rico - Mayaguez | Mayaguez, PR', 'For the 2022-2023 academic year, I was chosen to participate in the Federal Work-Study Program, which provides college students with a job in their university offices.',
' ', 'Website Team Member | Feria de Investigaciones UPRM | Mayaguez, PR', 'Selected to collaborate on the website team at the University of Puerto Rico – Mayaguez research fair for the 2022-2023 academic year',
];
const cursosRelevantes = 'Computer Organization | Linear Algebra | Programming Languages (In Progress)';
const edu = ['Bachelor of Science in Computer Science, University of Puerto Rico - Mayagüez, 2020-2025','GPA: 3.82/4.00', ' ', 'Tech Mini-Mester Fellow | Capital One', 'Selected & participated in an 8-day immersive experience for Capital One\'s Tech Mini-Mester to enhance tech skills, soft skills and mentorship. July 2022 - August 2022'];
const habilidadesT = ['C++ | Python | HTML | git | Visual Studio Code | Object Oriented Programming | OpenFrameWorks | Dev C++ | Microsoft Word | Power Point | WordPress | Practical experience assembling computers and 3D printers from parts.'];
const lang = ['Fully billingual in: English and Spanish'];
const reconocimientos = ['Honors Student at the University of Puerto Rico - Mayaguez: 2021-2022 & 2022-2023', 'Hispanic Scholarship Fund Scholar: 2022-2023'];

const myCV = new CV(nombre, email, telefono, experienciaP, cursosRelevantes, edu, habilidadesT, lang, reconocimientos);




// Llamada a la función show para mostrar los datos del CV
myCV.show();

// Función para descargar el CV como un archivo PDF
function download() {
  var link = document.createElement('a');
  link.href = "CV.pdf";
  link.download = 'file.pdf';
  link.dispatchEvent(new MouseEvent('click'));
} 
