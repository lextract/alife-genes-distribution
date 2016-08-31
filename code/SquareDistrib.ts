let d3 = window['d3'];
class SquareDistrib {
    svg: any;
    lastXcoord = 0.5;
    lastYcoord = 0.5;
    constructor(containderId: string) {
        this.svg = d3.select("#" + containderId).append("svg")
            .attr("width", '100%').attr("height", 300);
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
        .attr('class',cssClass)
    }
}