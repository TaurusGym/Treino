let treinoCount = 0;
let availableLetters = [];
let exercicios = []; // nova variável para armazenar os exercícios

for (let i = 0; i < 26; i++) {
  availableLetters.push(String.fromCharCode(65 + i));
}

const addTreinoButton = document.getElementById('addTreinoButton');

addTreinoButton.addEventListener('click', function() {
  const treino = document.createElement('div');
  treino.className = 'treino';
  const letter = availableLetters.shift();
  treino.innerHTML = `
    <h4>Treino ${letter}</h4>
    <button class="delete">Apagar Treino</button>
    <button class="addExercicio">Adicionar Exercicio</button>
  `;

  document.getElementById('treinos').appendChild(treino);

  const deleteButton = treino.querySelector('.delete');
  deleteButton.addEventListener('click', function() {
    treino.parentNode.removeChild(treino);
    availableLetters.unshift(letter);
  });

  const addExercicioButton = treino.querySelector('.addExercicio');
  addExercicioButton.addEventListener('click', function() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
    <div class="modal-dialog">
        <div class="modal-content popup">
          <div class="modal-header">
            <h5 class="modal-title">Adicionar Exercicio</h5>
          </div>
          <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="nome">Nome do Exercício:</label>
              <input type="text" class="form-control" id="nome" placeholder="Ex.: Agachamento">
            </div>
            <div class="imgholder">
              <label for="uploadimg" class="upload">
                  <input type="file" name="" id="uploadimg" class="picture">
                  <i class="fa-solid fa-plus"></i>
              </label>
              <img src="image/pic1.png" alt="" width="150" height="150" class="img">
           </div>
            <div class="form-group">
              <label for="telefone">Número de Séries:</label>
              <input type="number" class="form-control" id="serie" placeholder="Ex.:4">
            </div>
            <div class="form-group">
              <label for="rep">Número de Repetição:</label>
              <input type="number" class="form-control" id="rep" placeholder="Ex.:12">
            </div>
            <div class="form-group">
              <label for="peso">Peso:</label>
              <input type="number" class="form-control" id="peso" placeholder="Ex.:50 kg">
            </div>
            <div class="form-group">
            <label for="int">Intervalo de Descanso:</label>
            <input type="number" class="form-control" id="int" placeholder="Ex.:60s">
          </div>
            <div class="mb-3">
            <label for="message-text" class="col-form-label">Descrição do Exercício:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div> 
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
          <button type="button" class="btn btn-primary">Salvar</button>
        </div>
      </div>
    </div>
  </div>

    `;

    document.body.appendChild(modal);
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();

    
   });
});

var addExercício = document.querySelector('addExercicio')
imgInput = document.querySelector('.img'),
imgHolder = document.querySelector('.imgholder'),
uploadimg = document.querySelector("#uploadimg")

addExercício.addEventListener('click', ()=> {
    imgInput.src = "image/pic1.png"
})

uploadimg.onchange = function(){
    if(uploadimg.files[0].size < 3000000){   // 3MB = 3000000
        var fileReader = new FileReader()

        fileReader.onload = function(e){
            var imgUrl = e.target.result
            imgInput.src = imgUrl
        }

        fileReader.readAsDataURL(uploadimg.files[0])
    }

    else{
        alert("Esse Arquivo é muito Grande")
    }

}


