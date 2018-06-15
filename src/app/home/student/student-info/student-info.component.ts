import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Student } from '../models';
import {
    PageModel,
    CrudService,
    CrudComponent,
    DataTable,
    Form,
    Type
} from '../../../shared';

@Component({
    selector: 'app-student-info',
    templateUrl: './student-info.component.html'
})
export class StudentInfoComponent extends CrudComponent implements OnInit {

    @ViewChild('fileInput') el: ElementRef;

    student: Student;            // 存储用户信息，用于新增、修改、精确查询表单数据双向绑定

    cuDlgTitle: string;    // 新增、修改对话框标题
    addOrUpdate: boolean;  // 新增或更新用户信息“确认”提交按钮显示控制，true表示提交新增，false表示提交更新
    genderOptions: Array<object> = [];
    cols: any[];           // 数据表格column参数
    dt: DataTable;         // 数据表格事件类实例对象

    constructor(public crudService: CrudService) {
        // 调用父类的构造函数，将crudService依赖注入实例传给父类
        super(crudService);
        this.student = new Student();
        this.genderOptions = [{desc: '最新作品', type: 'newest'},
        {desc: '热门作品', type: 'hot'}
        ];
    }

    // 数据表格重载
    reload(pDataTable) {
        pDataTable.reset();  // 调用primeng dataTable组件里封装的reset方法重置数据表格
        this.dt.refresh();   // 调用我们自己封装的refresh方法从后台请求并刷新数据
    }

    // 打开精确查询弹窗
    showQueryMoModal(queryModal, queryForm) {
        queryForm.reset();   // 调用angular表单组件的reset方法重置表单
        queryModal.show();   // 调用ng2-bootstrap模态窗打开方法打开模态窗
    }

    // 打开“新增用户”弹窗
    showAddModal(cuModal, cuForm) {
        this.cuDlgTitle = '添加学生';
        this.addOrUpdate = true;

        cuForm.reset();   // 调用angular表单组件的reset方法重置表单
        cuModal.show();   // 调用ng2-bootstrap模态窗打开方法打开模态窗
    }

    // 打开'上传文件'弹窗
    showUploadModal(uploadModal, uploadForm) {
        uploadForm.reset();
        uploadModal.show();
    }

    // 打开“修改用户信息”弹窗
    showUpdateModal(cuModal, student: Student) {
        this.findById(this.dt, {'student.studentId': student.studentId}, data => {
            this.student = data.student;
            this.cuDlgTitle = '修改学生信息';
            this.addOrUpdate = false;
            cuModal.show();
        });
    }

    // 打开删除用户确认对话框
    showDelConfirm(student: Student) {
        this.confirm({dataTable: this.dt, params: {'student.studentId': student.studentId}});
    }

    // 选择文件时，得到选中的文件
    onFileChange(event) {
      console.log(this.student.file);
      this.student.file = this.el.nativeElement.files[0];
      console.log(this.student.file);
    }

    ngOnInit() {
        this.cols = [
            {field: 'name', header: '姓名'},
            {field: 'gender', header: '性别'},
            {field: 'birthday', header: '生日'},
            {field: 'mobileNum', header: '手机号'},
            {field: 'emial', header: '邮箱'},
            {field: 'idCard', header: '身份证'},
            {field: 'operator', header: '操作', styleClass: 'text-center'}
        ];

        this.dt = this.dataTable({url: 'student.list', method: 'GET', debounceTime: 800,
            searchKey: 'filterStr', pm: new PageModel(1, [10, 20, 30]),
            formArgs: {urls: {create: 'student.save', update: 'student.save', retrieve: 'student.findById',
            delete: 'student.delete', upload: 'student.upload'}, key: 'student', uploadKey: 'file'}});
    }
}
