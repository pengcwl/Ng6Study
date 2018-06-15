export const PATH = 'http://localhost:8080/ispd/';

export const ASYNC_URLS = {
    'login': 'assets/json-data/login-mock.json',
    'logout': null,
    'pubDictApi': PATH + 'rmApi/dictService/pubBatchLoad',
    'prvDictApi': PATH + 'rmApi/dictService/batchLoad',
    'province': 'assets/json-data/province-mock.json',
    'user.list': PATH + 'rmApi/user/user/list',
    'user.save': PATH + 'rmApi/user/user/save',
    'user.update': PATH + 'rmApi/user/user/save',
    'user.cou': PATH + 'rmApi/user/user/saveOrUpdate',
    'user.findById': PATH + 'rmApi/user/user/findById',
    'user.delete': PATH + 'rmApi/user/user/delete',
    'student.list': PATH + 'rmApi/student/student/list',
    'student.save': PATH + 'rmApi/student/student/save',
    'student.update': PATH + 'rmApi/student/student/save',
    'student.cou': PATH + 'rmApi/student/student/saveOrUpdate',
    'student.findById': PATH + 'rmApi/student/student/findById',
    'student.delete': PATH + 'rmApi/student/student/delete'
};
