let d3 = window['d3'];
class SquareDistrib {
    svg: any;
    lastXcoord = 0.5;
    lastYcoord = 0.5;
    color: string = '#555';
    constructor(containderId: string) {
        this.svg = d3.select("#" + containderId).append("svg")
            .attr("width", '100%').attr("height", 500);
    }

    setColor(colorHex: string){
        this.color = colorHex;
    }

    setInitialPoint(xCoord:number, yCoord: number){
        this.lastXcoord = xCoord;
        this.lastYcoord = yCoord;
    }

    processFromUrl(dnaUrl: string){
        d3.text(dnaUrl, (error, text) => {
            if (error) console.log(error);
            else this.processDnaSequence(text);
        });
    }

    clearArea(){
        this.svg.selectAll('*').remove();
    }

    processDnaSequence(dnaSequence: string) {
        for (var i = 0; i < dnaSequence.length; i++) {
            this.addNucleotide(dnaSequence[i]);
        }

    }

    addNucleotide(letter: string) {
        let cssClass = '';
        switch (letter) {
            case 'A':
                cssClass = 'nucleotideA';
                this.lastXcoord = this.lastXcoord / 2;
                this.lastYcoord = this.lastYcoord / 2;
                break;
            case 'C':
                cssClass = 'nucleotideC';
                this.lastXcoord = this.lastXcoord / 2;
                this.lastYcoord = (this.lastYcoord + 1) / 2;
                break;
            case 'G':
                cssClass = 'nucleotideG';
                this.lastXcoord = (this.lastXcoord + 1) / 2;
                this.lastYcoord = (this.lastYcoord + 1) / 2;
                break;
            case 'T':
                cssClass = 'nucleotideT';
                this.lastXcoord = (this.lastXcoord + 1) / 2;
                this.lastYcoord = this.lastYcoord / 2;
                break;
        }

        if (!cssClass) return;


        this.svg.append('circle')
        .attr('cx', (this.lastXcoord * 100) +  '%')
        .attr('cy', (this.lastYcoord * 100) + '%')
        .attr('r', 1).attr('fill',this.color)
        //.attr('class',cssClass)
    }
}