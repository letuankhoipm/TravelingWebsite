import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  kio = false;
  active: number = 0;
  open: number = 0;
  height_ul: number = 0;
  check_sub = false;
  lists: Array<Object> = [
    {
      title: 'Quản lí tour', icon: 'fa-umbrella-beach', id: 0, check_click: false,
      list_subs: [
        { title: 'Thêm Tour', color: '#47e5d7', id: '3a', part: '/admin/add-tour' },
        { title: 'Danh Sách Tour', color: '#febe29', id: '3b', part: '/admin/list-tour' },
        { title: 'Test Editor', color: '#0ebe29', id: '3c', part: '/admin/editor' }
      ]
    },
    // {
    //   title: 'Diễn Viên', icon: 'fa-portrait', id: 1, check_click: false,
    //   list_subs: [
    //     { title: 'Thêm Diễn Viên', color: '#47e5d7', id: '3a', part: '/admin/add-tour' },
    //     { title: 'List Diễn Viên', color: '#febe29', id: '3b', part: '/admin/add-tour' }
    //   ]
    // },
    // { title: 'User', icon: 'fa-users', id: 2},
    // { title: 'Video Background', icon: 'fa-video', id: 3},
  ];
  constructor() {
    this.activateClass(0);
  }

  ngOnInit() {
    // jQuery('.container').perfectScrollbar();
  }

  activateClass(i) {
    this.active = i;
    this.open = i;
    this.check_sub = false;
    for (var x in this.lists) {
      if (x != i)
        this.lists[x + ''].check_click = false;
    }
    this.lists[i + ''].check_click = !this.lists[i + ''].check_click;
    if (this.lists[i + ''].list_subs) {
      this.height_ul = this.lists[i + ''].list_subs.length * 50;
    } else {
      this.height_ul = 0;
    }
    //console.log(this.height_ul);
  }

  activateClass_c2(id) {
    this.active = id;
    this.check_sub = true;
  }

  ok() {
    this.kio = !this.kio;
  }

}
