var d3 = window['d3'];
var SquareDistrib = (function () {
    function SquareDistrib(containderId) {
        this.lastXcoord = 0.5;
        this.lastYcoord = 0.5;
        this.color = '#555';
        this.svg = d3.select("#" + containderId).append("svg")
            .attr("width", '100%').attr("height", 500);
    }
    SquareDistrib.prototype.setColor = function (colorHex) {
        this.color = colorHex;
    };
    SquareDistrib.prototype.setInitialPoint = function (xCoord, yCoord) {
        this.lastXcoord = xCoord;
        this.lastYcoord = yCoord;
    };
    SquareDistrib.prototype.processFromUrl = function (dnaUrl) {
        var _this = this;
        d3.text(dnaUrl, function (error, text) {
            if (error)
                console.log(error);
            else
                _this.processDnaSequence(text);
        });
    };
    SquareDistrib.prototype.clearArea = function () {
        this.svg.selectAll('*').remove();
    };
    SquareDistrib.prototype.processDnaSequence = function (dnaSequence) {
        for (var i = 0; i < dnaSequence.length; i++) {
            this.addNucleotide(dnaSequence[i]);
        }
    };
    SquareDistrib.prototype.addNucleotide = function (letter) {
        var cssClass = '';
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
        if (!cssClass)
            return;
        this.svg.append('circle')
            .attr('cx', (this.lastXcoord * 100) + '%')
            .attr('cy', (this.lastYcoord * 100) + '%')
            .attr('r', 1).attr('fill', this.color)
            //.attr('class', cssClass);
    };
    return SquareDistrib;
}());
