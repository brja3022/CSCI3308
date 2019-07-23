HEADERS = NULL
OBJECTS = parse.o

default: parse

%.o: %.c $(HEADERS)
	g++ -c #< -o $@

parse: $(OBJECTS)
	g++ $(OBJECTS) -o $@

clean:
	-rm -f $(OBJECTS)
	-rm -f parse