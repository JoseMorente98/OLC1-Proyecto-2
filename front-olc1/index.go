package main

import (
	"fmt"
	"html/template"
	"net/http"
)

func index(w http.ResponseWriter, r *http.Request) {
	t := template.Must(template.ParseFiles("index.html"))
	t.Execute(w, nil)
}

func lexico(w http.ResponseWriter, r *http.Request) {
	t := template.Must(template.ParseFiles("lexico.html"))
	t.Execute(w, nil)
}

func sintactico(w http.ResponseWriter, r *http.Request) {
	t := template.Must(template.ParseFiles("sintactico.html"))
	t.Execute(w, nil)
}

func copias(w http.ResponseWriter, r *http.Request) {
	t := template.Must(template.ParseFiles("copias.html"))
	t.Execute(w, nil)
}

func arbol(w http.ResponseWriter, r *http.Request) {
	t := template.Must(template.ParseFiles("arbol.html"))
	t.Execute(w, nil)
}

func redirect(w http.ResponseWriter, r *http.Request) {
	http.Redirect(w, r, "lexico.html", 301)
}

func main() {

	http.Handle("/css", http.StripPrefix("/css/", http.FileServer(http.Dir("css/"))))
	http.Handle("/js", http.StripPrefix("/js/", http.FileServer(http.Dir("js/"))))
	http.HandleFunc("/", index)
	http.HandleFunc("/lexico", lexico)
	http.HandleFunc("/sintactico", sintactico)
	http.HandleFunc("/copias", copias)
	http.HandleFunc("/arbol", arbol)
	fmt.Println("Servidor corriendo en el puerto: 8100")
	http.ListenAndServe(":8100", nil)
}
