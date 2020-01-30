wireworld{
	estados{
		Space " ";
		Spark "#";
		Tail "-";
		Wire "=";
	}; 
	transiciones{
		de Spark a Tail;
		de Tail a Wire;
		de Wire a Spark cuando 1 Spark y no 3 Spark;
	};
};
simular wireworld conf bouncers;