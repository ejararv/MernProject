import React from 'react'
import {Link} from 'react-router-dom'

export const LinksList = ({ links }) => {
  if (!links.length) {
    return <p className="center">Nie ma linków</p>
  }

  return (
    <table class="table section-heading">
      <thead class=" text-uppercase">
      <tr class="table-active">
        <th>#</th>
        <th>Oryginalny link</th>
        <th class="hide">Twój link</th>
        <th>Zobacz szczegóły</th>
      </tr>
      </thead>

      <tbody class="table-active">
      { links.map((link, index) => {
        return (
          <tr key={link._id}>
            <th>{index + 1}</th>
            <td>{link.from}</td>
            <td class="hide">{link.to}</td>
            <td>
            <a class="btn btn-primary text-uppercase" href={`/detail/${link._id}`}>Otwórz</a>
            </td>
          </tr>
        )
      }) }
      </tbody>
    </table>
  )
}