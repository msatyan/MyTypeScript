    class HtmlWrite
    {
        private OutPutElem: any;

        constructor(MyOutPutElem: any = document.getElementById("OutPutElem") ) 
        {
            this.OutPutElem = MyOutPutElem;
            this.OutPutElem.innerText = "";
        }

        public  LogOutput(msg: string): void 
        {
            this.OutPutElem.innerText += msg;
        }
    }

    export default class MyStartup
    {
        public static main(): number
        {
            console.log("Hello World");

            // var demo1 : HtmlWrite = new HtmlWrite( document.getElementById("OutPutElem") );
            var demo1 : HtmlWrite = new HtmlWrite();

            demo1.LogOutput("My1 TypeScript Hello World");
            demo1.LogOutput(" is Fun :-)!");

            return 0;
        }
    }
    MyStartup.main();
    

