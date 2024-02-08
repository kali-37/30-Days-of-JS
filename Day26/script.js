document.addEventListener('DOMContentLoaded', () => {
    display_data=""
    async function fetchData(file_name){
        try{    
            response = await fetch(file_name);
            json_data=await response.json();
            return json_data;
        }catch(error){
            return error;
        }
    }
    async function event_listeners(){
        inputElement=document.querySelector('.search-container input');
        inputButton=document.querySelector('.search-container button');
       
    
        inputElement.addEventListener('input',()=>{
            let inputValues=inputElement.value;
            if(inputValues==null){
                console.log("nullxa")
            }else{
    
            console.log('currently typed',inputValues);
            }
        });
    
        inputButton.addEventListener('click',()=>{
        console.log('buttonClicked');
        });
     
    }

    async function main(){
        json_data=await fetchData('world.json');
        console.log(json_data.length)
        const _total_countries=document.querySelector('#total_countries');
        _total_countries.textContent+=json_data.length;
         display_data=document.querySelector('.display-countries');
         const img_height=window.getComputedStyle(document.querySelector('img')).getPropertyValue('height');
         display_data.style.paddingTop=`${parseFloat(img_height)*1.1}px`;
         console.log( "hehg",img_height);
         json_data.forEach(element => {
             const div=document.createElement('div');
             div.className='flex-item';
             div.textContent=element.name;
             display_data.appendChild(div);
         });
    }
    

    main();
    event_listeners();
  
    console.log('aayohai')

});