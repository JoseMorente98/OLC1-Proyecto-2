/*package main

import (
	"fmt"
	"html/template"
	"net/http"
)

func index(w http.ResponseWriter, r *http.Request) {
	t := template.Must(template.ParseFiles("index.html"))
	t.execute(w, nil)
}

func main() {

	//http.Handle("/css", http.StripPrefix("/css/", http.FileServer(http.Dir("css/"))))
	//http.Handle("/js", http.StripPrefix("/js/", http.FileServer(http.Dir("js/"))))
	http.HandleFunc("/", index)
	http.HandleFunc("otherpage", index)
	fmt.Println("Servidor corriendo en el puerto: 8100")
	http.ListenAndServe(":8100", nil)
}*/

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

func main() {

	http.Handle("/css", http.StripPrefix("/css/", http.FileServer(http.Dir("css/"))))
	http.Handle("/js", http.StripPrefix("/js/", http.FileServer(http.Dir("js/"))))
	http.HandleFunc("/", index)
	http.HandleFunc("otherpage", index)
	fmt.Println("Servidor corriendo en el puerto: 8100")
	http.ListenAndServe(":8100", nil)
}
