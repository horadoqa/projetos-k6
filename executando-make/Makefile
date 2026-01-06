COLOR_RESET = \033[0m
COLOR_COMMAND = \033[36m
COLOR_YELLOW = \033[33m
COLOR_GREEN = \033[32m
COLOR_RED = \033[31m

## Lista os scripts de teste
lista:
	clear
	@echo "\n${COLOR_YELLOW}\n----------------------------------------${COLOR_RESET}"
	@echo "make random - random-status-code.js"
	@echo "make hosts - get_hosts_diferentes.js"
	@echo "${COLOR_YELLOW}----------------------------------------${COLOR_RESET}"

## Status Code Randômico
random:
	clear
	@echo "\n${COLOR_YELLOW}\n----------------------------------------${COLOR_RESET}"
	@echo "Executando o teste random-status-code.js"
	@echo "\n${COLOR_YELLOW}\n----------------------------------------${COLOR_RESET}"
	date
	k6 run random-status-code.js
	date 

## Cenários batendo em vários hosts
hosts:
	clear
	@echo "\n${COLOR_YELLOW}\n------------------------------------------${COLOR_RESET}"
	@echo "Executando o teste get_hosts_diferentes.js"
	@echo "${COLOR_YELLOW}\n------------------------------------------${COLOR_RESET}"
	pwd
	date
	k6 run get_hosts_diferentes.js
	date

