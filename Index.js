class Expense{ // THIS IS ALL JUST CLASSES
    constructor(name, amount, date){
        this.name = name;
        this.amount = amount;
        this.date = date;
    }
    describe(){ // THIS FORMATS ALL EXPENSES
        return `${this.name} $${this.amount} on ${this.date}`;
    }
}   
class stock{
    constructor(name, symbol, currentPrice, marketCap, change){
        this.name = name;
        this.symbol = symbol;
        this.currentPrice = currentPrice;
        this.marketCap = marketCap;
        this.change = change;
    }

}

class horses{
    constructor(name, odds, wins, id){
        this.name = name;
        this.odds = odds;
        this.wins =   wins;
       this.id = id;
     
    }
}

class bets{ // NOT USED BECAUSE IT CRASHES, I THINK THE CODE IS TOO LONG FOR THE PAGE TO HANDLE MY COMPUTER DOESN"T SEEM TO HAVE ENOUGHT RAM
    constructor(id, amount, horse){
        this.id = id;
        this.amount = amount;
        this.horse = horse;

}}

class race{
    constructor(location, time, racers){    
        this.location = location;
        this.time = time;
        this.racers = racers;
    }
    }

class bankAccount{
    constructor(name, balance){
        this.name = name;
        this.balance = balance;
        this.expenses = [];
    }
    addExpense(expense){
     if(expense instanceof Expense){
         this.expenses.push(expense);
         this.balance -= expense.amount;
     }
     else{
        throw new Error(`Invalid transaction`);
     }
    }

    describe(){
        return `${this.name} has $${this.balance} left`;    
    }
}


class Menu {
    constructor(){
        this.bankAccount = [];
        this.selectedAccount = null;
    }

    Start(){
        let selection = this.showMainMenuOptions();
        while(selection != 0){
            switch(selection){
                case '1':
                    this.createAccount();
                    break;
                case '2':
                    this.viewAccount();
                    break;
                case '3':
                    this.deleteAccount();
                    break;
                case '4':
                    this.CheckStocks();
                    break;
                case '5':
                    this.betOnHorses();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye!');
    }
    showMainMenuOptions(){ // THIS IS THE MAIN MENU
        return prompt(`
        0) Exit
        1) Create new account
        2) View account
        3) Delete accounts
        4) Check on top preforming stocks
        5) Bet on Horses
        `);
    }
    createAccount(){
        let name = prompt('Enter name for new account');
        let balance = prompt('Enter starting balance');
        this.bankAccount.push(new bankAccount(name, balance));
    }  
    deleteAccount(){
        let index = prompt('Enter the index of the account you wish to delete');
        if(index > -1 && index < this.bankAccount.length){
            this.bankAccount.splice(index, 1);
        }
    }
CheckStocks(){ // THIS IS THE STOCK MENU
    let selection = ''; 
    while(selection != '0'){
        selection = prompt(`
        0) Back
        1) look at Winners
        2) look at Losers    
        3) look at most Popluar
    
        `);
        switch(selection){
            case '1':
                this.winners();
                break;
            case '2':  
                this.losers();
                break;
            case '3':
                this.popular();
                break;
            default:
                selection = '0';
        }
    }
}

winners(){ // THIS DEFINES WINNER STOCKS
    let winner1 = new stock('Fattburg Casino', 'FBCA', 1453, 1674984898, 14.56);
    let winner2 = new stock('Pure Optics', 'PURE', 1059, 22267495, 5.12);
    let winner3 = new stock('Veggos Meatoids', 'VEME', 5895, 3434324846568, 3.76); 
    alert // THIS LISTS WINNER STOCKS WITH THEIR PROPERTIES AND ADDED LABELS
    (` 1 ${winner1.name} ${winner1.symbol} Price $${winner1.currentPrice} MKCAP $${winner1.marketCap} +${winner1.change}%
  2${winner2.name} ${winner2.symbol}  Price $${winner2.currentPrice}  MKCAP $${winner2.marketCap} +${winner2.change}%
  3${winner3.name} ${winner3.symbol} Price $${winner3.currentPrice} MKCAP  $${winner3.marketCap} +${winner3.change}%`);
}

losers(){
    let loser1 = new stock('Pizza House', 'PIHO', 153, 165898, 68.46); // THIS DEFINES LOSER STOCKS
    let loser2 = new stock('Security Redefined', 'SCRD', 1059, 222667495, 15.12);
    let loser3 = new stock('Consumer Soft Products', 'CSFT', 55, 3693966568, 13.56); 
    alert // THIS LISTs LOSER STOCKS WITH THEIR PROPERTIES AND ADDED LABELS
    (` 1 ${loser1.name} ${loser1.symbol} Price $${loser1.currentPrice} MKCAP $${loser1.marketCap} -${loser1.change}%
  2 ${loser2.name} ${loser2.symbol}  Price $${loser2.currentPrice}  MKCAP $${loser2.marketCap} -${loser2.change}%
  3 ${loser3.name} ${loser3.symbol} Price $${loser3.currentPrice} MKCAP  $${loser3.marketCap} -${loser3.change}%`);
    }
    
popular(){
    let popular1 = new stock('G~Tech', 'GTCH', 113, 7442448, 1.56); // THIS DEFINES POPULAR STOCKS
    let popular2 = new stock('Cruelty Squad', 'CRTY', 159, 2545495, 0.42);
    let popular3 = new stock('Veggos Meatoids', 'VEME', 895, 424214265, 3.76); 
    alert// THIS LISTS POPULAR STOCKS WITH THEIR PROPERTIES AND ADDED LABELS
    (` 1 ${popular1.name} ${popular1.symbol} Price ${popular1.currentPrice} MKCAP $${popular1.marketCap} +${popular1.change}% 
  2 ${popular2.name} ${popular2.symbol}  Price ${popular2.currentPrice}  MKCAP $${popular2.marketCap} +${popular2.change}%
  3 ${popular3.name} ${popular3.symbol} Price ${popular3.currentPrice} MKCAP  $${popular3.marketCap} +${popular3.change}%`);

}   
    
viewAccount(){
    let index = prompt('Enter the index of the account you wish to view');
    if(index > -1 && index < this.bankAccount.length){
        this.selectedAccount = this.bankAccount[index];
        let selection = '';
        while(selection != '0'){
            selection = prompt(`
            0) Back
            1) Create an expense
            2) List expenses
          
            `);
            switch(selection){
                case '1':
                    this.createExpense();
                    break;
                case '2':
                    this.listExpenses();
                    break;
                
                
            }
        }
        this.selectedAccount = null;
    }
}
    createExpense(){
        let name = prompt('ENTER NAME OF THE TAT YOU WAISTED MONEY ON');
        let amount = prompt('HOW MUCH DID YOU WASTE');
        let date = prompt('WHEN WAS IT');
        this.selectedAccount.addExpense(new Expense(name, amount, date));
    }
    listExpenses(){
        alert(this.selectedAccount.expenses.map(expense => expense.describe()).join('\n'));
    } 

betOnHorses(){ // THIS IS THE HORSE BETTING MENU IT WOULD BE LONG BUT ANY EFFORT I MADE TO MAKE IT SO YOU COULD CREATE AN OBJECT OF ANYTYPE WETHER IT BE BETS EXPENSES OR RACE WOULD MAKE IT CRASH, I COULDN'T EVEN MAKE IT GO BACK TO THE MAIN MENU DIRECTLY FOR WHATEVER REASON
        let selection = '';
        while(selection != '0'){
            selection = prompt(`
            0) Back
            1) List Horses
            2) Upcoming Races
          
        
            `);
            switch(selection){
                case '1':
                    this.listHorses();
                    break;
                case '2':
                    this.upcomingRaces();
                    break;

        
              
            }
        }
    }
    listHorses(){ // HORSE OBJECTS DEFINE WITH HORSE CLASS
        let horse1 = new horses('CAROL CHRISTIANS CORPSE CANAL', 1/8, 8, 1576);
        let horse2 = new horses('DEATH GRIPS', 1/2, 5, 111);
        let horse3 = new horses('RASKOLNIKOV PILLED', 1/10, 4, 3031);
        let horse4 = new horses('NABOKOVS BOOK', 1/50, 0, 541);
        let horse5 = new horses('I ONLY WEAR RICK OWENS', 1/20, 1, 6415);
        let horse6 = new horses('INFINITE JEST ENJOYER', 1/25, 0, 600);
        let horse7 = new horses('WATER FLOWING UNDERGROUND', 1/8, 2, 437);
        let horse8 = new horses('LAKE ONTARIO', 1/5, 3, 647);
        let horse9 = new horses('THE JUDGE HE NEVER SLEEPS', 1/4, 1, 1849);
        let horse10 = new horses('LUMPS AND BUMPS', 1/4, 2, 1997);
        alert
// THIS IS  A STRING WITH ALL THE HORSES AND PROPERTIES WITH ADDED LABELS
        (` 1 ${horse1.name} Odds ${horse1.odds} Wins ${horse1.wins} ID ${horse1.id} 
        2 ${horse2.name} Odds ${horse2.odds} Wins ${horse2.wins} ID ${horse2.id}
        3 ${horse3.name} Odds ${horse3.odds} Wins ${horse3.wins} ID ${horse3.id}
        4 ${horse4.name} Odds ${horse4.odds} Wins ${horse4.wins} ID ${horse4.id}    
        5 ${horse5.name} Odds ${horse5.odds} Wins ${horse5.wins} ID ${horse5.id}
        6 ${horse6.name} Odds ${horse6.odds} Wins ${horse6.wins} ID ${horse6.id}
        7 ${horse7.name} Odds ${horse7.odds} Wins ${horse7.wins} ID ${horse7.id}
        8 ${horse8.name} Odds ${horse8.odds} Wins ${horse8.wins} ID ${horse8.id}
        9 ${horse9.name} Odds ${horse9.odds} Wins ${horse9.wins} ID ${horse9.id}
        10 ${horse10.name} Odds ${horse10.odds} Wins ${horse10.wins} ID ${horse10.id}`);

        }
    upcomingRaces(){
       let race1 = new race('CANCER CITY MEGA RACEWAY', '7:00 AM', 5);
       let race2 = new race('STEEL BALL RUN', '11:45 AM', 10);
         let race3 = new    race('GLUE FACTORY 500', '12:00 PM', 500);// THIS IS UNUSED IN FAVOR OF A STRING WITHOUT THE OBJECT 
    alert/// THOUGH WE BREATH WE ARE ALL JUST CAPITAL
    (` 1 ${race1.location} Time ${race1.time} Racers ${race1.racers}
    2 ${race2.location} Time ${race2.time} Racers ${race2.racers} 
    3 ITS THE GLUE FACTORY 500, THE WORKERS PUT IT ON DURING LUNCH BREAK ALL OF THE HORSES ARE RACING, THEY SAY THAT THEY WILL ALWAYS RACE. THEY ARE TROTTING, TROTTING, THE DIRT CHURNS UNDER THEIR HOOVES, THEY LOOK LIKE A GREAT MASS OF ANTS. THEY SAY THAT THEY WILL NEVER SLEEP, THE HORSES THEY BOW TO THE WORKERS. THEY NEVER SLEEP, THEY SAY THAT THEY WILL NEVER DIE, THEY RUN IN THE LIGHT AND IN THE SHADOW AND THEY ARE A GREAT FAVORITE. THEY NEVER SLEEP THE HORSES THEY SAY THAT THEY WILL NVER DIE. THEY ARE RUNNING RUNNING. IN THE GLUE THEY WILL NEVER DIE. `);
    }


    // ANY THING I DID AFTER HERE MADE IT CRASH EVEN IF I USED EXPENSES NOT BETS IT WOULD STILL CRASH
}////MENU end?????


let menu = new Menu();  
menu.Start();