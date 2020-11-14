class Student {
  constructor(fName, lName, uName, eMail, pWord,pName,pPhone,grade,branch,tName){
    this.firstName = fName;
    this.lastName = lName;
    this.username = uName;
    this.emailAddress = eMail;
    this._password = pWord;
    this.parentName  = pName;
    this.parentPhone = pPhone;
    this.grade = grade;
    this.branch = branch;
    this.teacherName = tName;
  }

    get password(){
    return 'you are not able to see the password.';
  }
 
  fullName(){
    return this.firstName+' '+this.lastName

  }classroomName(){
    return this.grade+' '+this.branch

  }
}



const mehmet=new Student('mehmet','avci','54','meavci@ec.com','1231255444')
console.log(mehmet)
