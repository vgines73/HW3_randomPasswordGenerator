So pretty much we had to create a random password generator based on selection of characters the user wants in their password. 

CONDITIONS THAT NEED TO BE MET:
   
    *User needs a new secure password
        
        - once button is clicked to generate it:
            
            -series of prompts for password options
                
                -prompt for length of password is at least 8 characters long and no more than 128 characters
                    
                    -if user does not imput a number or enters a number less than 8 or greater than 128, user will be prompted with either: 
                        
                        -"Password length must be a number. Start over"
                        
                        -"Yo! That's too short! Password length must be at least 8 characters. Start over."
                    
                    -user will have to start over and click the button to generate password and meet the criteria needed to generate password.
                
                -for each prompt, user will select the options (uppercase, lowercase, numeric, symbols) and will validate each option selected. 

                - In order to have a safe password, the user must select at least one of options from the prompts.
                   
                    -if user picks at least one option, prompt will be:
                        
                        -"Yeah buddy! You picked at least one option"
                    
                    -if user does not any option, prompt will be: 
                        
                        -"You need to pick at least one of the 4 options for your password. Start over."
                    
                    -if user does not pick any option, then they will need to start over and click the button again and meet the criteria needed to generate password.
                        
        - Once selection(s) have be made and met criteria for password, password is then randomly generated on display with the selection(s) the user picked.


            
           
![repo] https://github.com/vgines73/HW3_randomPasswordGenerator

![link] https://vgines73.github.io/HW3_randomPasswordGenerator/

![demo] 