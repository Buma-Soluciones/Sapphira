life {
	estados{
		Muerto " ";
		Vivo "*";
	};
	transiciones{
		de Muerto a Vivo cuando 3 Vivo y 5 Muerto;
		de Vivo a Muerto cuando 4 Vivo o 7 Muerto.
	};
};

simular life conf piston;
