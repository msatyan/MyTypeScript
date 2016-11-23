
namespace TsClassDemo
{
    export class MyTypeDemo
    {
        constructor(){}

        public  Numbers(): void
        {
            let decimal: number = 6;
            let hex: number = 0xf00d;
            let binary: number = 0b1010;
            let octal: number = 0o744;

            console.log( "decimal: " + decimal);

            // Usage of TS Template Literals
            console.log( `hex: ${hex}` );
            console.log( `binary: ${binary}
                          octal: ${octal}` );
        }
    }

}