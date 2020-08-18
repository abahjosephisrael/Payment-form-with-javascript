// Getting elements from document
let total = document.querySelector('#total');
let amountSacrifice = document.querySelector('#amountSacrifice');
let amountMedicalOutreach = document.querySelector('#amountMedicalOutreach');
let amountSpecialProject = document.querySelector('#amountSpecialProject');
let amountBuilding = document.querySelector('#amountBuilding');
let amountGeneralOffering = document.querySelector('#amountGeneralOffering');
let amountBenevolence = document.querySelector('#amountBenevolence');
let amountTitheOffering = document.querySelector('#amountTitheOffering');
let amountFundRaising = document.querySelector('#amountFundRaising');

let btnGive = document.querySelector('#btnGive');
let btnEdit = document.querySelector('#edit');
let currencyTypeList = document.querySelector('#currencyType');

// Variable declaration
let totalDonation = 0;
let sacrificeInputValue = 0;
let medicalOutreachInputValue = 0;
let specialProjectInputValue = 0;
let buildingProjectInputValue = 0;
let generalOfferingInputValue = 0;
let benevolenceInputValue = 0;
let titheOfferingInputValue = 0;
let fundRaisingInputValue = 0;

// Event listeners
btnGive.addEventListener('click', donate);
amountSacrifice.addEventListener('blur', calculate);
amountSacrifice.addEventListener('focus', removeAmount);
amountMedicalOutreach.addEventListener('blur', calculate);
amountMedicalOutreach.addEventListener('focus', removeAmount);
amountSpecialProject.addEventListener('blur', calculate);
amountSpecialProject.addEventListener('focus', removeAmount);
amountBuilding.addEventListener('blur', calculate);
amountBuilding.addEventListener('focus', removeAmount);
amountGeneralOffering.addEventListener('blur', calculate);
amountGeneralOffering.addEventListener('focus', removeAmount);
amountBenevolence.addEventListener('blur', calculate);
amountBenevolence.addEventListener('focus', removeAmount);
amountTitheOffering.addEventListener('blur', calculate);
amountTitheOffering.addEventListener('focus', removeAmount);
amountFundRaising.addEventListener('blur', calculate);
amountFundRaising.addEventListener('focus', removeAmount);
currencyTypeList.addEventListener('change', ()=>{displayTotalDonation(0)});
document.querySelector('.modal').addEventListener('blur',modalHide)
btnEdit.addEventListener('click',modalHide);

//This function removes donation amount upon update
function removeAmount(e){
  if (e.target.value !== "") {
    totalDonation -= parseFloat(e.target.value);
  }
}
// This function calculate the total donation amount
function calculate(e){
    if (e.target.value !== '') {          
      // Calculate Sacrifce
      if(e.target.classList.contains('amountSacrifice')) { 

        sacrificeInputValue = parseFloat(e.target.value);
        displayTotalDonation(sacrificeInputValue);
        if (totalDonation === 0) {
          displayTotalDonation(0);
        }
        else{                
          totalDonation -= sacrificeInputValue;
        }    
        totalDonation - sacrificeInputValue;
      }
      // Calculate Medical outreach
      if(e.target.classList.contains('amountMedicalOutreach')) {          
        medicalOutreachInputValue = parseFloat(e.target.value);
        displayTotalDonation(medicalOutreachInputValue);
        if (totalDonation === 0) {
          displayTotalDonation(0);
        }
        else{                
          totalDonation -= medicalOutreachInputValue;
        }    
        totalDonation - medicalOutreachInputValue;
      }
      // Calculate Special outreach
      if(e.target.classList.contains('amountSpecialProject')) {          
        specialProjectInputValue = parseFloat(e.target.value);
        displayTotalDonation(specialProjectInputValue);
        if (totalDonation === 0) {
          displayTotalDonation(0);
        }
        else{                
          totalDonation -= specialProjectInputValue;
        }    
        totalDonation - specialProjectInputValue;
      }
      // Calculate Building Project
      if(e.target.classList.contains('amountBuilding')) {          
        buildingProjectInputValue = parseFloat(e.target.value);
        displayTotalDonation(buildingProjectInputValue);
        if (totalDonation === 0) {
          displayTotalDonation(0);
        }
        else{                
          totalDonation -= buildingProjectInputValue;
        }    
        totalDonation - buildingProjectInputValue;
      }
        // Calculate General Offering
      if(e.target.classList.contains('amountGeneralOffering')) {          
        generalOfferingInputValue = parseFloat(e.target.value);
        displayTotalDonation(generalOfferingInputValue);
        if (totalDonation === 0) {
          displayTotalDonation(0);
        }
        else{                
          totalDonation -= generalOfferingInputValue;
        }    
        totalDonation - generalOfferingInputValue;
      }
        // Calculate Benevolence
      if(e.target.classList.contains('amountBenevolence'))
        {          
          benevolenceInputValue = parseFloat(e.target.value);
        displayTotalDonation(benevolenceInputValue);
        if (totalDonation === 0) {
          displayTotalDonation(0);
        }
        else{                
          totalDonation -= benevolenceInputValue;
        }    
        totalDonation - benevolenceInputValue;
      }
        // Calculate Tithe Offering
      if(e.target.classList.contains('amountTitheOffering')) {          
          titheOfferingInputValue = parseFloat(e.target.value);
        displayTotalDonation(titheOfferingInputValue);
        if (totalDonation === 0) {
          displayTotalDonation(0);
        }
        else{                
          totalDonation -= titheOfferingInputValue;
        }    
        totalDonation - titheOfferingInputValue;
      }
        // Calculate Fund Raising
      if(e.target.classList.contains('amountFundRaising')) {          
          fundRaisingInputValue = parseFloat(e.target.value);
        displayTotalDonation(fundRaisingInputValue);
        if (totalDonation === 0) {
          displayTotalDonation(0);
        }
        else{                
          totalDonation -= fundRaisingInputValue;
        }    
        totalDonation - fundRaisingInputValue;
      }
      displayTotalDonation(parseFloat(e.target.value));
    }
}
// Spinner fade out
(()=>{
  setTimeout(()=>{
    document.querySelector(".spinner").style.display = "none";
    document.querySelector('.holder').style.display = "block";
  }, 1000);
})();
// Format currency on page load
(()=>{
  total.innerText = formatCurrecny(totalDonation);
})();
// Set currency format
function formatCurrecny(amount){  
  let formatedAmount;  
  if(currencyType.value == "NGN"){
      const formart = new Intl.NumberFormat('en-NG',{
          style: 'currency',
          currency: 'NGN',
          minimumFractionDigits: 2
      });
      formatedAmount = formart.format(amount);
      return formatedAmount;
  }    
  if(currencyType.value == "USD"){
      const formart = new Intl.NumberFormat('en-US',{
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 2
      });
      formatedAmount = formart.format(amount);
      return formatedAmount;
  }    
  if(currencyType.value == "GBP"){
      const formart = new Intl.NumberFormat('en-UK',{
          style: 'currency',
          currency: 'GBP',
          minimumFractionDigits: 2
      });
      formatedAmount = formart.format(amount);
      return formatedAmount;
  }    

}
// Display total donation
function displayTotalDonation(value) {
  if (isNaN(value)) {
    totalDonation += 0;
  }
  else {
  totalDonation += parseFloat(value);
  }
  total.innerText = formatCurrecny(totalDonation);
  document.querySelector('#totalSumary').innerText = `Total Donation - ${formatCurrecny(totalDonation)}`;
}
// Button event
function donate(e) {
  if (totalDonation === 0) {
    document.querySelector('.error').style.display = 'block';
    scrollTo(top);
    setTimeout(()=>{
      document.querySelector('.error').style.display = 'none';
    },2000);
  }
  else{
    performClick();
    
  }
    e.preventDefault();
    e.stopPropagation();
}
// This function displays the summary
function performClick(){
  // Spinner fade out
  document.querySelector(".spinner").style.display = "block";
  setTimeout(()=>{
    document.querySelector(".spinner").style.display = "none";
    document.querySelector('.holder').style.display = "none";
  }, 1000);
  setTimeout(()=>{
    document.querySelector('#modalToggler').click();
  }, 1000);
}
// This function hide the summary display
function modalHide(){
    setTimeout(()=>{
      document.querySelector(".spinner").style.display = "none";
      document.querySelector('.holder').style.display = "block";
    }, 500);  
}