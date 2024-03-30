function clique() {
    const sen1 = document.getElementById('senha1')
    const sen2 = document.getElementById('senha2')
    
    if (sen2.value === sen1.value) {
      sen2.setCustomValidity('')
    } else {
      sen2.setCustomValidity('senha diferem')
      }
    }
    function clicar() {
    alert('Registro realizado com sucesso')
    }
    