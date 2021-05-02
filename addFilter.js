var filter = document.getElementsByClassName('register-header md hydrated')
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
   
    // var eighteenPlusRows = Array.from(allRows).filter(row => {

    //     var ageLImit = row.querySelectorAll('.age-limit')[0].innerHTML;
    //     return ageLImit === 'Age 18+'
    // })
    // console.log(eighteenPlusRows);
    // document.querySelector('mat-selection-list').replaceChild(eighteenPlusRows, allRows)
}
select.addEventListener('change', function(e) {
    onAgeFilterSelect()
})
// para.appendChild(select);
filter[0].appendChild(select)

