import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, Form } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { UpdateContactService } from '@services/update-contact.service';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./contact.component.scss'],
    providers: [ContactService]
})
export class ContactComponent implements OnInit {

    @ViewChild('destInput') private destInputEle: any;

    public phuongbinh = {
        infor: 'Mọi chi tiết vui lòng liên lạc với Công ty Trách nhiệm hữu hạn Thương Mại và Du Lịch & Vận Tải Phương Bình Tourist. Chúng tôi sẽ chủ động liên hệ với quý khách hàng.',
        address: '112/52/9, Hoàng Quốc VIệt, phường An BÌnh, quận Ninh Kiều, thành phố Cần Thơ.',
        office: 'Khuôn viên Bình Phó A, phường Long Tuyền, quận Bình Thuỷ, thành phố Cần Thơ.',
        phone: '0909 372 319'
    }

    myform: FormGroup;
    name: FormControl;
    email: FormControl;
    phone: FormControl;
    arrival: FormControl;
    destination: FormControl;
    message: FormControl;


    constructor(
        private fb: FormBuilder,
        private contactService: ContactService,
        private updateContactService: UpdateContactService) {


        // this.myform = this.fb.group({
        //   'email': [null, Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)])],
        //   'name': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
        //   'arrival': ['', [Validators.required]],
        //   'phone': ['', Validators.required],
        //   'destination': ['', Validators.required],
        //   'message': ['']
        // });

    }

    ngOnInit() {
        this.createFormControls();
        this.createForm();
        this.getDestFromService();
    }

    createFormControls() {
        this.name = new FormControl('', [
            Validators.minLength(1),
            Validators.required
        ]);
        this.email = new FormControl('', [
            Validators.required,
            Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
        ]);
        this.phone = new FormControl('', [
            Validators.minLength(1),
            Validators.required
        ]);
        this.arrival = new FormControl('', [
            Validators.minLength(1),
            Validators.required
        ]);
        this.destination = new FormControl('', [
            Validators.minLength(1),
            Validators.required
        ]);
        this.message = new FormControl('', [
            Validators.minLength(1),
            Validators.required
        ]);
    }

    createForm() {
        this.myform = new FormGroup({
            name: this.name,
            email: this.email,
            message: this.message,
            phone: this.phone,
            arrival: this.arrival,
            destination: this.destination
        });
        setTimeout(() => {
            this.myform.patchValue({
                destination: 'ahhihi'
            });
        }, 4000);

        console.log('created1: ', this.myform);

    }

    sendMessage(value) {
        if (value) {
            this.myform = this.fb.group({
                'email': [null, Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)])],
                'name': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
                'arrival': '',
                'destination': '',
                'message': '',
                'phone': '',
            });
            this.contactService.create(value);
        }

        // const modalRef = this.modalService.open(ConfirmNotSubmitComponent, { centered: true });
        // modalRef.componentInstance.title = 'Gửi thành công';
        // modalRef.componentInstance.question = 'Cám ơn bạn đã liên hệ với chúng tôi!';
    }

    private getDestFromService() {
        const that = this;
        const obs = this.updateContactService.getDestination.subscribe((des: string) => {
                console.log(des);
                that.myform.patchValue({
                    destination: des
                });
                console.log('created2: ', that.myform);

                // obs.unsubscribe();
            });
    }
}
