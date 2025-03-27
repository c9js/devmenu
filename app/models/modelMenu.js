/*▄──────────────────▄
  █                  █
  █  Список модулей  █
  █                  █
  ▀──────────────────▀*/
let prompts = require('@inquirer/prompts');

/*▄───────────────────▄
  █                   █
  █  Model: Menu      █
  █  • Меню (логика)  █
  █                   █
  ▀───────────────────▀*/
$.Model.Menu = class {
/*┌─────────────────────────┐
  │ Выполняет инициализацию │
  └─────────────────────────┘*/
    init = async (items) => {
    // Получаем список пунктов меню
        this.items = new items;
        
    // Проходим по пунктам меню
        Object.getOwnPropertyNames(this.items).forEach((item) => {
            _=this.items[item]
        });
        return;
        const answer = await prompts.select({
        // Вопрос
            message: 'Выберите файл:',
            
        // Значение по умолчанию
            default: 'yarn',
            
        // Список файлов
            choices: [
            // Разделитель
                new prompts.Separator('zzzzz'),
                {
                    name: 'npm',
                    value: 'npm',
                    description: 'npm is the most popular package manager',
                },
                
                {
                    name: 'yarn',
                    value: 'yarn',
                    description: 'yarn is an awesome package manager',
                }
            ]
        });
        _=answer
    }
};
