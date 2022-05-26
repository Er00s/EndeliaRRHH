import { Injectable } from '@angular/core';
import { LoginForm } from '../interface/login-form';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private adminUser: LoginForm;
  private usersArr: User[];

  constructor() {
    this.adminUser = {
      username: 'admin@admin.com',
      password: 'admin123',
    };
    this.usersArr = [
      {
        name: 'Francisco',
        lastname: 'Gimenez',
        job: 'rrhh consultor',
        cellphone: 1234587,
        mail: 'francisco.Gimenez@gmail.com',
        img: 'https://bootdey.com/img/Content/avatar/avatar7.png',
      },

      {
        name: 'Pedro',
        lastname: 'Cifuentes',
        job: 'Frontend Developer',
        cellphone: 1234587,
        mail: 'pedro.Cifuentes@gmail.com',
        img: 'https://bootdey.com/img/Content/avatar/avatar2.png',
      },
      {
        name: 'Andrea',
        lastname: 'Rodriguez',
        job: 'UX/UI Designer',
        cellphone: 1234587,
        mail: 'Andrea.Rodriguez@gmail.com',
        img: 'https://bootdey.com/img/Content/avatar/avatar3.png',
      },
      {
        name: 'Anita',
        lastname: 'Fuentes',
        job: 'Frontend Developer',
        cellphone: 1234587,
        mail: 'Anita.Fuentes@gmail.com',
        img: 'https://bootdey.com/img/Content/avatar/avatar8.png',        
      },
      {
        name: 'Paulo',
        lastname: 'Londra',
        job: 'Backend Developer',
        cellphone: 1234587,
        mail: 'Pablo.Londra@gmail.com',
        img: 'https://bootdey.com/img/Content/avatar/avatar5.png',
      },
      {
        name: 'Sergio',
        lastname: 'Mazza',
        job: 'Operations Director',
        cellphone: 1234587,
        mail: 'Sergio.Mazza@gmail.com',
        img: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      },
      {
        name: 'Martin',
        lastname: 'Perez',
        job: 'RRHH consultor',
        cellphone: 1234587,
        mail: 'Martin.Perez@gmail.com',
        img: 'https://bootdey.com/img/Content/avatar/avatar6.png',
      },
      {
        name: 'Andres',
        lastname: 'Lopez',
        job: 'Teach Lead',
        cellphone: 1234587,
        mail: 'Andres.Lopez@gmail.com',
        img: 'https://bootdey.com/img/Content/avatar/avatar5.png',
      },
    ];
  }

  // en caso de realizar con una peticion utilizariamos un http.post(`${URL}, formData`).pipe(tap((resp)=>{localStorage.setItem('token',resp.token)}));
  login(formData: LoginForm) {
    console.log(formData);
    console.log(this.adminUser);
    if (
      formData.username === this.adminUser.username &&
      formData.password === this.adminUser.password
    ) {
      localStorage.setItem('token', '123');
    }
  }

  // en el caso del get utilizariamos la misma peticion pero con htt.get y la url correcta de la API enviando el token:
  //http.get(`${URL},token, httpOptions`).pipe(tap((resp)=>{localStorage.setItem('token',resp.token)}));
  getAllUsers() {
    this.usersArr.sort((a,b) => a.lastname.localeCompare(b.lastname));
    return this.usersArr;
  }

  searchUsers(term: string) {
    if (term) {
      term = term.toLowerCase();
      const filterArr = this.usersArr;
      return filterArr.filter(
        (user) =>
          user.name.toLowerCase().includes(term) ||
          user.lastname.toLowerCase().includes(term) ||
          user.mail.toLowerCase().includes(term) ||
          user.cellphone.toString().includes(term) ||
          user.job.toLowerCase().includes(term)
      ).sort((a,b) => a.lastname.localeCompare(b.lastname));
    } else {
      return this.usersArr;
    }
  }
}
