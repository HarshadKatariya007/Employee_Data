class Employee
{
    constructor(Name,Number,Post,Lunch,Break,Leve)
    {
        this.Name = Name;
        this.Number = Number;
        this.Post = Post;
        this.Lunch = Lunch;
        this.Break = Break;
        this.Leve = Leve;
    }

    Employee_Name()
    {
        console.log(`${this.Name}`);
    }
    Employee_Numbers()
    {
        console.log(`${this.Number}`);
    }
    Employee_Salary()
    {
        console.log("Employee Salary Fix :- 200000");
    }
}

class Manager extends Employee
{
    constructor(Name,Number,Post,Lunch,Break,Leve,Fire,incress_Salary)
    {
        super(Name,Number,Post,Lunch,Break,Leve,Fire,incress_Salary);
            this.Fire = Fire;
            this.incress_Salary = incress_Salary;
    }

    Re_leve()
    {
        if(this.Leve==5)
        {
            console.log("Continue Leve");
        }
        else
        {
            console.log("Minimu Leve Five Not Any Leve");
        }
    }
    Break_Time()
    {
        if(this.Break==true)
        {
            console.log("You Need A Break");
        }
        else
        {
            console.log("Not More Break..");
        }
    }
    Fire_Employeee()
    {
        if(this.Leve==10)
        {
            console.log("You Are Safe");
        }
        else
        {
            console.log("You Are Fire Becuse You Leve Is Ten");
        }
    }

}

let harshad = new Manager("Harshad",9876543212,"HR","20 Min",true,12,"","Month Incress 1000 Rupes",);
console.log(harshad);
harshad.Employee_Salary();
harshad.Re_leve();
harshad.Break_Time();
harshad.Fire_Employeee();