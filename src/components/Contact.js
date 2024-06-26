import React from 'react'
import location from '../assets/location.png'
const Contact = () => {
  return (
    <div className=''>
        <section class="p-5">
      <div class="container">
        <div class="row g-4">
          <div class="col-md">
            <h2 class="text-center mb-4">Contact Info</h2>
            <ul class="list-group list-group-flush lead">
              <li class="list-group-item">
                <span class="fw-bold">Main Location:</span> 50 Main st Boston MA
              </li>
              <li class="list-group-item">
                <span class="fw-bold">Enrollment Phone:</span> (555) 555-5555
              </li>
              <li class="list-group-item">
                <span class="fw-bold">Main Phone:</span> (333) 333-3333
              </li>
              <li class="list-group-item">
                <span class="fw-bold">Enrollment Email:</span> (555)
                enroll@frontend.test
              </li>
              <li class="list-group-item">
                <span class="fw-bold">Main Email:</span>
                main@frontend.test
              </li>
            </ul>
          </div>
          <div class="col-md">
            <div id="map">
                <img width={400} height={300} src={location}></img>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Contact