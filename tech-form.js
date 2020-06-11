

function sendForm() {
        var dateStarted = document.getElementById("issueDate").value;
        var storeNumber = document.getElementById("storeNumber").value;
        var submitBy = document.getElementById("contactPerson").value;
        var customSubject = document.getElementById("title").value;
        var computers = document.getElementsByName("computers[]");
        var otherPc = document.getElementById("otherPcText").value;
        var printers = document.getElementsByName("printers[]");
        var otherPrinter = document.getElementById("otherPrinterText").value;
        var modelNumber = "Model Number: " + document.getElementById("modelNumber").value + " ";
        var serialNumber = "Serial Number: " + document.getElementById("serialNumber").value + " ";
        var phones = document.getElementsByName("phones[]");
        var extensionNumber = "Extension Number: " + document.getElementById("extensionNumber").value + " ";
        var serialPhone = "Serial Number: " + document.getElementById("serialPhone").value + " ";
        var macAddress = "Mac Address: " + document.getElementById("macAddress").value + " ";
        var usw = document.getElementsByName("usw[]");
        var otherUswText = document.getElementById("otherUswText").value;
        var issues = document.getElementsByName("issues[]");
        var bodyText = document.getElementById("comments").value;

        if(dateStarted == 0) {
                alert("Please enter a Date");
                return false;
        }else if(storeNumber == 0) {
                alert("Please select a Store");
                return false;
        }else if(customSubject == 0) {
                alert("Please enter a title for the ticket");
                return false;
        }else if(submitBy == 0) {
                alert("Please add a Contact Person");
                return false;
        }else if(bodyText == 0) {
                alert("Please add comments to Ticket");
                return false;
        }

        // Computers checkbox selection
        var compChecked = "";
        for(var i=0; i<computers.length; i++) {
                if(computers[i].checked) {
                        compChecked += "%0D%0A" + computers[i].value;
                }
        }

        // Printers checkbox selection
        var printChecked = "";        
        for(var j=0; j<printers.length; j++) {
                if(printers[j].checked) {
                        printChecked += "%0D%0A" + printers[j].value;
                }
        }

        // Phones checkbox selection
        var phoneChecked = "";        
        for(var k=0; k<phones.length; k++) {
                if(phones[k].checked) {
                        phoneChecked += "%0D%0A" + phones[k].value;
                }
        }

        // USW checkbox selection
        var uswChecked = "";        
        for(var l=0; l<usw.length; l++) {
                if(usw[l].checked) {
                        uswChecked += "%0D%0A" + usw[l].value;
                }
        }

        // Steps checkbox selection
        var issuesChecked = "";        
        for(var m=0; m<issues.length; m++) {
                if(issues[m].checked) {
                        issuesChecked += "%0D%0A" + issues[m].value;
                }
        }

        // Comments 
        if(bodyText == 0) {
                var bodyText = "No comments reported";
        }

        var sendMail = "mailto:eduardo55322823+2xj1usic4jeb0mrdjbzc@boards.trello.com?subject=" + "(" + dateStarted + ")" + " / " + storeNumber + " / " +  customSubject + "&body=" + "PLEASE REMEMBER TO ATTACH IMAGES SHOWING ANY ERROR MESSAGES!!!" + "%0D%0A" + "Ticket Submitted By: " + submitBy + "%0D%0A %0D%0A" + "-COMPUTERS-" + compChecked + otherPc + "%0D%0A %0D%0A" + "-PRINTERS / SCANNERS-" + printChecked + otherPrinter + "%0D%0A" + modelNumber + "%0D%0A" + serialNumber + "%0D%0A %0D%0A" + "-PHONES-" + phoneChecked + "%0D%0A" + extensionNumber + "%0D%0A" + serialPhone + "%0D%0A" + macAddress + "%0D%0A %0D%0A" + "-UNIFORM SOLUTION ISSUES-" + uswChecked + otherUswText + "%0D%0A %0D%0A" + "-STEPS PERFORMED BY USER-" + issuesChecked + "%0D%0A %0D%0A" + "TICKET DETAILS: " + "%0D%0A" + bodyText + "%0D%0A %0D%0A";

        window.open(sendMail);
}
