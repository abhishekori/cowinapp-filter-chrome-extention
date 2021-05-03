

var setAllFilters = function () {
    var filter = document.getElementsByClassName('custom-checkbox')
    if(filter.length) {

        var divContainer = document.createElement('DIV');
        divContainer.id = 'cowinAdvFilterContainer';
        if(filter.length == 1) {
            filter[0].appendChild(divContainer);
        }
        
    
        var select = document.createElement("SELECT");
        select.id = 'cowinAgeFilter';
        
        var allOp = document.createElement('OPTION');
        allOp.value = 'all'
        var allOpTxt = document.createTextNode('All')
        allOp.appendChild(allOpTxt)
        
        
        var option18 = document.createElement('OPTION');
        option18.value = 'Age 18+'
        var option18Txt = document.createTextNode('18-44')
        option18.appendChild(option18Txt)
        
        var option45 = document.createElement('OPTION');
        option45.value = 'Age 45+'
        var option45Txt = document.createTextNode('45+')
        option45.appendChild(option45Txt)
        
        
        select.appendChild(allOp)
        select.appendChild(option18)
        select.appendChild(option45)
        
        var labelEL = document.createElement('LABEL');
        labelEL.setAttribute('for', 'cowinAgeFilter');
        labelELTxt = document.createTextNode('Age Filter: ');
        labelEL.appendChild(labelELTxt)
        labelEL.style.marginRight='5px';
    
        var filterDiv = document.createElement('DIV');
        filterDiv.appendChild(labelEL)
        filterDiv.appendChild(select)
        
        var onAgeFilterSelect = function() {
            var selectedAge = document.getElementById('cowinAgeFilter').value
            
            
            if(document.querySelector('mat-selection-list')) {
                var allRows = document.querySelector('mat-selection-list').children
                for(rowI in allRows) {
               
                    if(!isNaN(rowI)){
                      
                        var row =  allRows[rowI]
                        row.style.display = ''
                        var ageLImit = row.querySelectorAll('.age-limit')[0].innerHTML;
                        if(selectedAge!== 'all' && ageLImit !== selectedAge) {
                            row.style.display = 'none'
                        }
                    }
                    
                }
            }
           
        }
        select.addEventListener('change', function(e) {
            onAgeFilterSelect()
        })
      
        if(window.location.pathname === '/appointment') {
            const cowinAdvFilterContainer = document.getElementById('cowinAdvFilterContainer');
            if(cowinAdvFilterContainer.hasChildNodes()) {
                cowinAdvFilterContainer.replaceChild(filterDiv, cowinAdvFilterContainer.children[0])
            }else {
                cowinAdvFilterContainer.appendChild(filterDiv)
            }
                
            
            
        } else {
            var userMessage = document.createElement('DIV')
            userMessage.appendChild(document.createTextNode('Login into appointment page to view the filter'))
            const cowinAdvFilterContainer = document.getElementById('cowinAdvFilterContainer');
            if(cowinAdvFilterContainer.hasChildNodes()) {
                cowinAdvFilterContainer.replaceChild(userMessage, cowinAdvFilterContainer.children[0])
            }else {
                cowinAdvFilterContainer.appendChild(userMessage)
            }
        }
        var restFilter = () => {
            document.getElementById('cowinAgeFilter').value = 'all'
        }
        var scanSearchBtn = () => {
            setTimeout(() => {
                var xpath = "//ion-button[contains(text(),'Search')]";
                var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if(matchingElement) {
                    matchingElement.addEventListener('click', function() {
                        restFilter()
                    })
                }
            }, 500)
        }
       
       
        scanSearchBtn();
        var customCheckbox = document.getElementsByClassName('custom-checkbox')
        if(customCheckbox.length){
            customCheckbox[0].addEventListener('click', function(params) {
               
                scanSearchBtn();
            })
        }
       
    }
    
}
setAllFilters();
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
     
      if (request.message === 'urlChanged') {
            setAllFilters(); 
       
      }
  });

