document.querySelector('#Calculate').addEventListener('click', checkZodiac)

function checkZodiac(){
    let month = document.querySelector('#month').value.toLowerCase()
    let day = document.querySelector('#day').value.toLowerCase()

    // Aquarius
        if(month === 'january' && day >= 20 & day <= 31|| month === 'february' && day <= 18){
        document.querySelector('#Result').innerText = 'Aquarius'
        }

    // Pisces
        else if(month === 'february' && day >= 19 & day <= 29|| month === 'march' && day <= 20){
        document.querySelector('#Result').innerText = 'Pisces'
        }

    // Aries
        else if(month === 'march' && day >= 21 & day <= 31|| month === 'april' && day <= 19){
        document.querySelector('#Result').innerText = 'Aries'
        }

    // Taurus 
        else if(month === 'april' && day >= 20 & day <= 30|| month === 'may' && day <=20){
        document.querySelector('#Result').innerText = 'Taurus'
        }

    // Gemini 
       else if(month === 'may' && day >= 21 & day <= 31|| month === 'june' && day <=20){
            document.querySelector('#Result').innerText = 'Gemini'
            }

    // Cancer 
        else if(month === 'june' && day >= 21 & day <= 30|| month === 'july' && day <=22){
            document.querySelector('#Result').innerText = 'Cancer'
        }

    // Leo 
        else if(month === 'july' && day >= 23 & day <= 31|| month === 'august' && day <=22){
         document.querySelector('#Result').innerText = 'Leo'
        }
        
    // Virgo
        else if(month === 'august' && day >= 23 & day <= 31|| month === 'september' && day <=22){
        document.querySelector('#Result').innerText = 'Virgo'
        }
    
    // Libra
        else if(month === 'september' && day >= 23 & day <= 30|| month === 'october' && day <=22){
        document.querySelector('#Result').innerText = 'Libra'
        }
    
    // Scorpio
        else if(month === 'october' && day >= 23 & day <= 31|| month === 'november' && day <=21){
        document.querySelector('#Result').innerText = 'Scorpio'
        }
    
    // Sagittarius
        else if(month === 'october' && day >= 22 & day <= 30|| month === 'november' && day <=21){
        document.querySelector('#Result').innerText = 'Sagittarius'
        }
    
    // Capricorn
        else if(month === 'december' && day >= 22 & day <= 31|| month === 'january' && day <=19){
            document.querySelector('#Result').innerText = 'Capricorn'
            }
    
    else {document.querySelector('#Result').innerText = "INVALID DATE"}
}