function Translation_disco(flux) {
    return true;
}

//this function is for translate the flux
function Translation_Ginko(flux) {
    let result = [];
    switch (flux[1]) {

        //Is for the case where we got a flux starting by M, more precisely if the flux are a "Résiliation"
        case "M":
            for (let i = 1; i < flux.length; i++) {
                if ([1, 2, 4].includes(i)) result.push(flux[i]);
                else if (result.length == 3 && flux[i].length == 15) result.push(flux[i]);
                else if (flux[i].includes("FC")) {
                    result.push(flux[i]);
                    i++;
                    result.push(flux[i]);
                    let nbrC = flux[i];
                    for (let j = 0; j < 6; j++) {

                        if (j < nbrC) {
                            i++;
                            result.push(flux[i]);
                        }
                        else result.push("-");
                    }
                    i++;
                    console.log(flux[i]);
                    result.push(flux[i]);
                }
                else if (flux[i].includes("G") && result.length == 13) {
                    console.log("test")
                    result.push(flux[i + 1]);
                }
            }
            break;

        //Is for the case where we got a flux starting by N, more precisely if the flux are a "Dépose/pose avec ou sans MC"
        case "N":
            for (let i = 1; i < flux.length; i++) {
                console.log(result.length);
                if ([1, 2, 4].includes(i)) result.push(flux[i]);
                else if ((result.length == 3 || result.length == 11) && (flux[i].length == 14 || flux[i].length == 15)) result.push(flux[i]);
                else if (flux[i].includes("FC")) {
                    if (result.length == 3) result.push("-")
                    if (result.length == 11) result.push("-")
                    i++;
                    result.push(flux[i]);
                    let nbrC = flux[i];
                    for (let j = 0; j < 6; j++) {

                        if (j < nbrC) {
                            i++;
                            result.push(flux[i]);
                        }
                        else result.push("-");
                    }

                    if (result.length == 19) {
                        i++;
                        result.push(flux[i]);
                    }
                }
                else if (flux[i - 1][0] == "G" && result.length == 20) result.push(flux[i]);
                else if (flux[i - 1].includes("DISJ")) result.push(flux[i]);
                else if ((flux[i][0] == "A" || flux[i][0] == "E") && result.length == 22) result.push(flux[i]);
                else if (flux[i].includes("H") && result.length == 23) result.push(flux[i]);
            }
            break;

        //Is for the case we got a flux starting by K, more precisely for the case where the flux are a "mise en service"
        case "K":
            for (let i = 1; i < flux.length; i++) {
                if ([1, 2, 4, 6, 7, 8].includes(i)) result.push(flux[i]);
                else if (flux[i - 1].includes("FC")) {
                    result.push(flux[i]);
                    let nbrC = flux[i];
                    for (let j = 0; j < 6; j++) {

                        if (j < nbrC) {
                            i++;
                            result.push(flux[i]);
                        }
                        else result.push("-");
                    }
                    i++;
                    console.log(flux[i]);
                    result.push(flux[i]);
                    result.push(flux[i + 1]);
                }
                else if (flux[i].includes("G") && result.length == 15) {
                    result.push(flux[i + 3]);
                }
            }
            break;
        default:
    }
    return result;
}