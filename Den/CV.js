class CV {
  constructor(name, email, phone, pExperience, coursework, edu, tskills, skills, lang, awards) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.pExperience = pExperience;
    this.coursework = coursework;
    this.edu = edu;
    this.tskills = tskills;
    this.skills = skills;
    this.lang = lang;
    this.awards = awards;
  }

  getName() {
    document.writeln('<div id=' + '"' + 'contenido' + '"' + '><center><body style=background-color:f6f1de;><h1><b>' + this.name + ' </b></h1>');
  }

  getEmail() {
    document.writeln(this.email);
    document.write(' | ');
  }

  getphone() {
    document.writeln(this.phone);
    document.writeln('<hr>');
  }

  getpExperience() {
    document.writeln('<h2><b>Professional Experience </b></h2>');
    for (let i = 0; i < this.pExperience.length; i++) {
      document.writeln(this.pExperience[i] + '<br>');
    }
    document.writeln('<hr>');
  }

  getCour() {
    document.writeln('<h2><b>Relevant Coursework</b></h2><br>' + this.coursework + '<hr>');
  }

  getTskills() {
    document.writeln('<h2><b>Technical Skills & Tools</b></h2>');
    for (let i = 0; i < this.tskills.length; i++) {
      document.writeln(this.tskills[i] + '<br>');
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

  getSkills(is_last = false) {
    if (is_last == false) {
      document.writeln('<h2><b>WHAT </b></h2>');
      for (let i = 0; i < this.skills.length; i++) {
        document.writeln(this.skills[i] + '<br>');
      }
      document.writeln('<hr>');
    }
    if (is_last) {
      document.writeln('<div class="lang"><h2><b>Skills </b></h2>');
      for (let i = 0; i < this.skills.length; i++) {
        document.writeln(this.skills[i] + '<br>');
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

  setName(name) {
    this.name = name;
  }

  setEmail(email) {
    this.email = email;
  }

  setPhone(phone) {
    this.phone = phone;
  }

  setpExperience(ed) {
    this.pExperience = ed;
  }

  setCour(coursework) {
    this.coursework = coursework;
  }

  setTskills(exp) {
    this.tskills = exp;
  }

  setSkills(skills) {
    this.skills = skills;
  }

  setlang(lang) {
    this.lang = lang;
  }

  setAwards(awards) {
    this.awards = awards;
  }

  show(include_name = true, include_email = true, include_phone = true, include_obj = true, include_pExperience = true, include_exp = true, include_abil = true, include_skills = true, include_lang = true, include_awards = true, last_lang = true) {
    if (include_name) {
      this.getName();
    }
    if (include_email) {
      this.getEmail();
    }
    if (include_phone) {
      this.getphone();
    }
    if (include_obj) {
      this.getCour();
    }
    if (include_exp) {
      this.getTskills();
    }
    if (include_pExperience) {
      this.getpExperience();
    }
    if (include_abil) {
      this.getedu();
    }
    if (include_skills && !include_lang) {
      if (include_skills) {
        this.getSkills(true);
      } else {
        this.getSkills(false);
        this.getlang();
      }
    }
    if (include_lang) {
      this.getlang(last_lang);
    }
    if (include_awards) {
      document.writeln('<h2><b>Awards</b></h2>');
      
      for (let i = 0; i < this.awards.length; i++) {
        document.writeln(this.awards[i] + '<br>');
      }
      

    }
  }
}


const name = 'Denzel Montes-Melendez';
const email = 'denzel.montes@upr.edu';
const phone = '(787) 371-7499';
const pExperience = ['Administrative Assistant | University of Puerto Rico - Mayaguez | Mayaguez, PR', 'For the 2022-2023 academic year, I was chosen to participate in the Federal Work-Study Program, which provides college students with a job in their university offices.',
' ', 'Website Team Member | Feria de Investigaciones UPRM | Mayaguez, PR', 'Selected to collaborate on the website team at the University of Puerto Rico – Mayaguez research fair for the 2022-2023 academic year',
];
const coursework = 'Computer Organization | Linear Algebra | Programming Languages (In Progress)';
const edu = ['Bachelor of Science in Computer Science, University of Puerto Rico - Mayagüez, 2020-2025','GPA: 3.82/4.00', ' ', 'Tech Mini-Mester Fellow | Capital One', 'Selected & participated in an 8-day immersive experience for Capital One\'s Tech Mini-Mester to enhance tech skills, soft skills and mentorship. July 2022 - August 2022'];
const tskills = ['C++ | Python | HTML | git | Visual Studio Code | Object Oriented Programming | OpenFrameWorks | Dev C++ | Microsoft Word | Power Point | WordPress | Practical experience assembling computers and 3D printers from parts.'];
const skills = ['Object-oriented programming', 'Web development', 'Database management', 'Problem-solving'];
const lang = ['Fully billingual in: English and Spanish'];
const awards = ['Honors Student at the University of Puerto Rico - Mayaguez: 2021-2022 & 2022-2023', 'Hispanic Scholarship Fund Scholar: 2022-2023'];

const myCV = new CV(name, email, phone, pExperience, coursework, edu, tskills, skills, lang, awards);





myCV.show();

function download() {
  var link = document.createElement('a');
  link.href = "CV.pdf";
  link.download = 'file.pdf';
  link.dispatchEvent(new MouseEvent('click'));
} 
