
function sendForm() {
        var dateStarted = document.getElementById("issueDate").value;
        var storeNumber = document.getElementById("storeNumber").value;
        var submitBy = document.getElementById("contactPerson").value;
        var customSubject = document.getElementById("title").value;
        var computers = document.getElementsByName("computers[]");
        var otherPc = document.getElementById('otherPcText').value;
        var printers = document.getElementByName("printers[]");
        var otherPrinter = document.getElementById("otherPrinterText").value;
        var modelNumber = document.getElementById("modelNumber").value;
        var serialNumber = document.getElementById("serialNumber").value;
        var bodyText = document.getElementById("comments").value;

        // Computers checkbox selection
        var compChecked = "";
        for(var i=0; i<computers.length; i++) {
                if(computers[i].checked) {
                        compChecked += "%0D%0AComputer/Register with issues: " + computers[i].value;
                }else if(!computers[i].checked && otherPc === 0) {
                        compChecked = "No computers with errors.";
                }
        }

        // // Printers checkbox selection
        var printChecked = "";
        for(var j=0; j<printers.length; j++) {
                if(printers[j].checked) {
                        printChecked += "%0D%0APrinter/Scanner with issues: " + printers[j].value;
                }else if(!printers[j].checked && otherPrinter === 0) {
                        printChecked = "No Printers or Scanners with errors.";
                }
        }

        // Comments 
        if(bodyText === 0) {
                var bodyText = "No comments reported";
        }

        var sendMail = "mailto:eduardo55322823+2xj1usic4jeb0mrdjbzc@boards.trello.com?subject=" + "(" + dateStarted + ")" + " / " + storeNumber + " / " +  customSubject + "&body=" + "PLEASE REMEMBER TO ATTACH IMAGES SHOWING ANY ERROR MESSAGES!!!" + "%0D%0A" + "Ticket Submitted By: " + submitBy + "%0D%0A %0D%0A" + "WHAT ITEM IS EXPERIENCING THE ISSUE" + "%0D%0A" + "==Computers==" + "%0D%0A" + compChecked + otherPc + "%0D%0A" + "==Printers / Scanners==" + "%0D%0A" + printChecked + otherPrinter + "%0D%0A" + modelNumber + "%0D%0A" + serialNumber + "%0D%0A" + "%0D%0A" + "TICKET DETAILS: " + "%0D%0A" + bodyText;

        window.open(sendMail);
}