import logo from './logo.svg';

import './App.css';

import React, { useState } from 'react';

function Translation_disco(flux)
{
  let result=[];
  switch(flux[0])
  {
    case "B":
      for(let i=0; i<flux.length;i++)
      {
        if([0,1,3].includes(i)) result.push(flux[i]);
        if(i==6 && result.length==3){
          result.push(flux[i-1])
        }
      }
      
    case "O":

    default :
      break;
  }
  return result;
}

//this function is for translate the flux (In the futur we need to translate this to a classe Flux)
function Translation_Ginko(flux) 
{
    let result =[];
    switch(flux[1]){

      //Is for the case where we got a flux starting by M, more precisely if the flux are a "Résiliation"
      case "M":
        for(let i=1; i<flux.length;i++)
        {
          if([1,2,4].includes(i)) result.push(flux[i]);
          else if(result.length == 3 && flux[i].length == 15) result.push(flux[i]);
          else if(flux[i].includes("FC")) 
          {
            result.push(flux[i]);
            i++;
            result.push(flux[i]);
            let nbrC = flux[i];
            for(let j = 0; j<6; j++)
            {
              
              if(j < nbrC) 
              {
                i++;
                result.push(flux[i]);   
              }
              else result.push("-");
            }
            i++;
            console.log(flux[i]);
            result.push(flux[i]);
          }
          else if(flux[i].includes("G") && result.length == 13){
            console.log("test")
            result.push(flux[i+1]);
          }
        }
        break;
      
      //Is for the case where we got a flux starting by N, more precisely if the flux are a "Dépose/pose avec ou sans MC"
      case "N":
        for(let i=1; i<flux.length;i++)
        {
          console.log(result.length);
          if([1,2,4].includes(i)) result.push(flux[i]);
          else if((result.length == 3 || result.length == 11) && (flux[i].length == 14 || flux[i].length == 15)) result.push(flux[i]);
          else if(flux[i].includes("FC")) 
          {
            if(result.length == 3) result.push("-")
            if(result.length == 11) result.push("-")
            i++;
            result.push(flux[i]);
            let nbrC = flux[i];
            for(let j = 0; j<6; j++)
            {
              
              if(j < nbrC) 
              {
                i++;
                result.push(flux[i]);   
              }
              else result.push("-");
            }
            
            if(result.length==19){
              i++;
              result.push(flux[i]);
            }
          }
          else if(flux[i-1][0] == "G" && result.length == 20) result.push(flux[i]);
          else if(flux[i-1].includes("DISJ")) result.push(flux[i]);
          else if((flux[i][0]=="A" || flux[i][0]=="E") && result.length == 22) result.push(flux[i]);
          else if(flux[i].includes("H") && result.length == 23) result.push(flux[i]);
        }
        break;
      
      //Is for the case we got a flux starting by K, more precisely for the case where the flux are a "mise en service"
      case "K" :
        for(let i=1; i<flux.length;i++)
        {
          if([1,2,4,6,7,8].includes(i)) result.push(flux[i]);
          else if(flux[i-1].includes("FC")) 
          {
            result.push(flux[i]);
            let nbrC = flux[i];
            for(let j = 0; j<6; j++)
            {
              
              if(j < nbrC) 
              {
                i++;
                result.push(flux[i]);   
              }
              else result.push("-");
            }
            i++;
            console.log(flux[i]);
            result.push(flux[i]);
            result.push(flux[i+1]);
          }
          else if(flux[i].includes("G") && result.length == 15){
            result.push(flux[i+3]);
          }
        }
        break;
        default:
    }
    return result;
}

function App() {
  //SetInputValue is used to get the state of many input enter
  const [inputValue, setInputValue] = useState('');

  //setTableDate is used to enter all the data get before in inputValue in the table
  const [tableData, setTableData] = useState([]);

  //activeTable is for switch in any table when the good character is input in the flux
  const [activeTable, setActiveTable] = useState(null)
  
  //This variable is for get the value input when the user press the button "validate".
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  //This variable is for check if the user have press enter in the input.
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };
  
  //this variable is call when we need to add somes values in the table.
  const addDataToTable = (data) => {
    setTableData(currentData => [currentData, data]);
  };

  //This variable is used for change many state when the user input the flux.
  const handleSubmit = () => {
    console.log(inputValue); 
    let disco = false;
    let flux= inputValue.replace(/;+/g, ";").split(";");
    setTableData([]);
    console.log(flux);

    //This switch case is for determinate flux's type and used the good table at the UI
    switch(flux[1]) {
      case "M" :
        setActiveTable('resiliation');
        break;
      case "N" :
        setActiveTable('depose');
        break;
      case "K" :
        setActiveTable('miseEnService');
        break;
      default :
        switch(flux[0])
        {
          case "A" :
            setActiveTable("souscription(disco)");
            disco=true;
            break;
          case "E" :
            setActiveTable("Resiliation(disco)");
            disco=true;
            break;
          case "C" :
            setActiveTable("ssDepose(disco)");
            disco=true;
            break;
          case "B" :
            setActiveTable("acDepose(disco")
            disco=true;
            break;
          default :
            console.log('Saisir un flux correct')
            setActiveTable(null)
        }
    }
    const newData = addDataToTable(disco ? Translation_disco(flux) : Translation_Ginko(flux));
  };


  //This variable is just the table we are showing in the webapp.
  const Tableau = ({data}) => {
    
    return (
      // Here is for add many content in the table
      <div style={{ overflowX: 'auto', backgroundColor: "gray", borderRadius: '10px', margin: "10px", marginTop: "center"}}>
        <table id="depose" class="bg-info" style={{display: activeTable === 'depose' ? 'block' : 'none'}}>
          <tr>
            <th>ID Gestion</th>
            <th>N° PDL</th>
            <th>Date</th>
            <th>Ancien matricule</th>
            <th>Nombre de cadran av mod</th>
            <th>1er index av mod</th>
            <th>2e index av mod</th>
            <th>3e index av mod</th>
            <th>4e index av mod</th>
            <th>5e index av mod</th>
            <th>6e index av mod</th>
            <th>Nouveau matricule</th>
            <th>Nombre de cadran ap mod</th>
            <th>1er cadran ap mod</th>
            <th>2e cadran ap mod</th>
            <th>3e cadran ap mod</th>
            <th>4e cadran ap mod</th>
            <th>5e cadran ap mod</th>
            <th>6e cadran ap mod</th>
            <th>Type de relevé</th>
            <th>Puissance Souscrite</th>
            <th>Type Compteur</th>
            <th>N° demande SGE</th>
            <th>Plage HC</th>
          </tr>

          {data.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </table>

        <table id="resiliation" class="bg-info" style={{display: activeTable === 'resiliation' ? 'block' : 'none'}}>
          <tr>
            <th>ID Gestion</th>
            <th>N° PDL</th>
            <th>Date</th>
            <th>Matricule Compteur</th>
            <th>Calendrier fournisseur</th>
            <th>Nombre de cadran</th>
            <th>1er index résiliation</th>
            <th>2e index résiliation</th>
            <th>3e index résiliation</th>
            <th>4e index résiliation</th>
            <th>5e index résiliation</th>
            <th>6e index résiliation</th>
            <th>Type de relevé</th>
            <th>Type Compteur</th>
          </tr>

          {data.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </table>
        <table id="miseEnService" class="bg-info" style={{display: activeTable === 'miseEnService' ? 'block' : 'none'}}>
          <tr>
            <th>ID Gestion</th>
            <th>N° PDL</th>
            <th>Date</th>
            <th>N° Demande SGE</th>
            <th>N° partenaire</th>
            <th>Matricule Compteur</th>
            <th>Nombre de cadran</th>
            <th>1er index</th>
            <th>2e index</th>
            <th>3e index</th>
            <th>4e index</th>
            <th>5e index</th>
            <th>6e index</th>
            <th>Type de relevé</th>
            <th>Puissance Souscrite</th>
            <th>Type Compteur</th>
          </tr>

          {data.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </table>
        <table id="souscription(disco)" class="bg-info" style={{display: activeTable === 'souscription(disco)' ? 'block' : 'none'}}>
          <tr>
            <th>ID Gestion</th>
            <th>N° PDL</th>
            <th>Date</th>
            <th>N° Demande SGE</th>
            <th>N° partenaire</th>
            <th>Matricule Compteur</th>
            <th>Nombre de cadran</th>
            <th>1er index</th>
            <th>2e index</th>
            <th>3e index</th>
            <th>4e index</th>
            <th>5e index</th>
            <th>6e index</th>
            <th>Type de relevé</th>
            <th>Puissance Souscrite</th>
            <th>Type Compteur</th>
          </tr>

          {data.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </table>

        <table id="resiliation(disco)" class="bg-info" style={{display: activeTable === 'resiliation(disco)' ? 'block' : 'none'}}>
          <tr>
            <th>ID Gestion</th>
            <th>N° PDL</th>
            <th>Date</th>
            <th>N° Demande SGE</th>
            <th>N° partenaire</th>
            <th>Matricule Compteur</th>
            <th>Nombre de cadran</th>
            <th>1er index</th>
            <th>2e index</th>
            <th>3e index</th>
            <th>4e index</th>
            <th>5e index</th>
            <th>6e index</th>
            <th>Type de relevé</th>
            <th>Puissance Souscrite</th>
            <th>Type Compteur</th>
          </tr>

          {data.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </table>
        <table id="ssDepose(disco)" class="bg-info" style={{display: activeTable === 'ssDepose(disco)' ? 'block' : 'none'}}>
          <tr>
            <th>ID Gestion</th>
            <th>N° PDL</th>
            <th>Date</th>
            <th>N° Demande SGE</th>
            <th>N° partenaire</th>
            <th>Matricule Compteur</th>
            <th>Nombre de cadran</th>
            <th>1er index</th>
            <th>2e index</th>
            <th>3e index</th>
            <th>4e index</th>
            <th>5e index</th>
            <th>6e index</th>
            <th>Type de relevé</th>
            <th>Puissance Souscrite</th>
            <th>Type Compteur</th>
          </tr>

          {data.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </table>
        <table id="acDepose(disco)" class="bg-info" style={{display: activeTable === 'acDepose(disco)' ? 'block' : 'none'}}>
          <tr>
            <th>ID Gestion</th>
            <th>N° PDL</th>
            <th>Date</th>
            <th>N° Demande SGE</th>
            <th>N° partenaire</th>
            <th>Matricule Compteur</th>
            <th>Nombre de cadran</th>
            <th>1er index</th>
            <th>2e index</th>
            <th>3e index</th>
            <th>4e index</th>
            <th>5e index</th>
            <th>6e index</th>
            <th>Type de relevé</th>
            <th>Puissance Souscrite</th>
            <th>Type Compteur</th>
          </tr>

          {data.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </table>
      </div>
    );
  };


  //Is for show the html in the webapp
  return (
    <div className="App">
      <header>
        <h2 style={{color: "white"}}>Traducteur de flux</h2>
      </header>

      <div className="Filter">
        <div class="form-floating mb-3">
          <input
            className='form-control'
            type="text" 
            id="input_flux" 
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
          <label for="floatingInput">Flux</label>
        </div>
        <div class="validate-button">
          <button onClick={handleSubmit} class="btn btn-secondary btn-lm">Valider</button>
        </div>
        
      </div>
      
      <Tableau data={tableData}/>
    </div>
  );
}

export default App;