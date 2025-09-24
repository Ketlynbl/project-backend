function updateUserController(request, response){
    const userId = request.params.id
    return response.json(`Atualização de usuário: ${userId}`)
}

export default updateUserController