window.customerName = 'bob';

function getCustomerName(){
    return window.customerName;
}

function upperCaseCustomerName(){
    window.customerName = window.customerName.toUpperCase();
}

function setBestCustomer(){
    window.bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
    window.bestCustomer = 'maybe bob';

}

function changeLeastFavoriteCustomer(){
    const leastFavoriteCustomer = 'jack';
    leastFavoriteCustomer = 'dawson';
    
}