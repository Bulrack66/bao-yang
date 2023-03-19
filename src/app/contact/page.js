'use client';
import Banner from '@/components/Banner/Banner';
import './form.css'
import Nav from '@/components/Nav/Nav'

export default function PageWithJSbasedForm() {
  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = {
      first: event.target.first.value,
      last: event.target.last.value,
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    const endpoint = '/api/form'

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(`Is this your full name: ${result.data}`)
  }
  return (
    <>
      <Banner/>
      <div className='form-page_box'>
        <Nav/>
        <div className="form-page">
          <div>
            <h2>Cabinet BAO YANG - Laurent DUPLAN</h2>
            <div className="text-white">
              <p>80 rue de la bergerie - Pôle santé 2</p>
              <p>01390 St ANDRÉ DE CORCY</p>
              <p>Tél : 06 19 83 84 92 - Mail : contact@baoyang.fr</p>
            </div>
        
            <p>Pour tout renseignement,</p>
            <p>veuillez remplir le formulaire ci-dessous :</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-box">
              <label htmlFor="first">Nom</label>
              <input type="text" id="first" name="first" required />
            </div>
            <div className="form-box">
              <label htmlFor="last">Prénom</label>
              <input type="text" id="last" name="last" required />
            </div>
            <div className="form-box">
              <label htmlFor="phone">Téléphone</label>
              <input type="number" id="phone" name="phone" required />
            </div>
            <div className="form-box">
              <label htmlFor="email">E-mail</label>
              <input type="text" id="email" name="email" required />
            </div>
            <div className="form-box">
              <label htmlFor="subject">Objet</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-box">
              <label htmlFor="message">Message</label>
              <input type="text" min="20" max="500" id="message" name="message" required />
            </div>
            <div>RGPD : Les informations recueillies dans ce formulaire ne servent qu'à reprendre contact avec vous. Elles ne sont pas conservées dans un fichier informatique ou manuscrit et elles ne sont pas communiquées à des tiers.</div>
            <button type="submit">Envoyé</button>
            <div>La consultation d'un praticien en Médecine Traditionnelle Chinoise ne saurait remplacer le suivi médical habituel ou en cours, ni se substituer aux traitements en cours. Seul votre médecin peut décider de l'arrêt ou de la modification d'un traitement médical.</div>
          </form>
        </div>
      </div>
    </>
  )
}