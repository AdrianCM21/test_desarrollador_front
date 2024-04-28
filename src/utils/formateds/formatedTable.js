export const formatedTable = (datos) => {
  return datos.map((item) => {
    return {
      "Id": item.id,
      "Nombre": item.name,
      "Nombre de Usuario": item.username,
      "Correo": item.email,
      "Telefono": item.phone,
      "Sitio Web": item.website
    }
  })
}