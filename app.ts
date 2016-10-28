// console.log("It works!");


class MySimpleTest
{
    private OutPutElem: any;

    constructor(MyOutPutElem: any) 
    {
        this.OutPutElem = MyOutPutElem;
        this.OutPutElem.innerText = "";
    }

    public  LogOutput(msg: string): void 
    {
        this.OutPutElem.innerText += msg;
    }
}

class Startup 
{
    public static main(): number
    {
        console.log("Hello World");

        var demo1 : MySimpleTest = new 
        MySimpleTest( document.getElementById("OutPutElem") );

        demo1.LogOutput("This is a");
        demo1.LogOutput(" TypeScript Hello World! :-)");

        return 0;
    }
}



