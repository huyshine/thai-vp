import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { ToastService } from 'angular-toastify';
import * as yup from 'yup';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ngOnInit() {}

  credentials = {
    customerName: '',
    email: '',
    phoneNumber: '',
    country: 'Hà Nội',
    loanPayMust: 0,
    giveSalaryType: 'Tiền Mặt',
  };

  schema = yup.object({
    customerName: yup
      .string()
      .required('Họ và tên không được để trống')
      .min(10, 'Họ và Tên phải nhiều hơn 10 ký tự')
      .max(100, 'Họ và Tên không được quá 100 ký tự')
      .matches(/^[a-zA-Z\s]+$/, 'Họ và tên chưa đúng định dạng'),
      // .minLength(10,'Tên phải nhiều hơn 10 ký tự')
      // .trim('Tên không được để khoảng trắng'),
    email: yup
      .string()
      .required('Email Không được để trống')
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Chưa đúng định dạng Email'),
    phoneNumber: yup
      .string()
      .required('Số điện thoại không được để trống')
      .matches(/^(0[3798]|86)\d{8}$/, 'Chưa đúng định dạng số điện thoại'),
    loanPayMust: yup
      .number()
      .required('* Số tiền vay không được để trống')
      .min(20000000, '*Số tiền vay phải lớn hơn 20 triệu')
      .max(100000000000, '* Số tiền vay phải nhỏ hơn 1 tỷ'),
  });

  constructor(
    private registerService: RegisterService,
    private router: Router,
    // private fb: FormBuilder,
    private toastService: ToastService
  ) {}
  onSubmit() {
    this.schema.validate(this.credentials).then(() => {
      this.registerService.regiser(this.credentials).subscribe(
        (response) => {
          console.log(response);
          // localStorage.setItem('token', response.token);
          this.toastService.success('Đăng ký thành công');

          setTimeout(() => {
            this.router.navigate(['/']);
          }, 500);

        },
        (errors) => {            
          this.toastService.error(errors?.error?.errors?.vpBankCustomer);
        }
      );
    })
    .catch((errors) => {
      this.toastService.error(errors);
    });;
    // if (errors.length > 0) {
    //   // this.toastService.error(errors[0]);
    //   console.log(errors , "Error");
    // } else {
    //   try {
    //     this.registerService.regiser(this.credentials).subscribe(
    //       (response) => {
    //         console.log(response);
    //         // localStorage.setItem('token', response.token);
    //         this.toastService.success('Đăng ký thành công');

    //         setTimeout(() => {
    //           this.router.navigate(['/']);
    //         }, 500);

    //       },
    //       (errors) => {            
    //         this.toastService.error(errors?.error?.errors?.vpBankCustomer);
    //       }
    //     );
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  }

  status = false;
  showQuestionContent = (e: any, index: number) => {
    const ques = document.querySelectorAll('.question-item-content-wrap');
    const ques_title = document.querySelectorAll('.question-item-header');
    for (let i = 0; i < ques.length; i++) {
      if (i != index) {
        ques[i].classList.add('hidden');
      }
    }
    ques[index].classList.toggle('hidden');

    ques_title[index].classList.toggle('border-b');
  };
  showQuestion = () => {
    const ques = document.querySelectorAll('.question-item');
    for (let i = 5; i < 10; i++) {
      ques[i].classList.toggle('hidden');
    }
    const btn_ques = document.querySelector('.btn-ques');
    btn_ques?.classList.toggle('hidden');
  };

  limit: number = 10; // <==== Edit this number to limit API results
  customOptions: OwlOptions = {
    dots: true,
    nav: true,
    center: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
    },
  };
}
