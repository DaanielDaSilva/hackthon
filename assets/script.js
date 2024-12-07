const input = document.querySelector('input');
        const button = document.querySelector('button');
        const chatArea = document.querySelector('.overflow-y-auto');

        button.addEventListener('click', sendMessage);
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });

        function sendMessage() {
            if (!input.value.trim()) return;

            const userMessage = document.createElement('div');
            userMessage.className = 'flex gap-2';
            userMessage.innerHTML = `
                <div class="bg-blue-100 rounded-lg p-3 max-w-[80%]">
                    <p>UsuÃ¡rio: ${input.value}</p>
                </div>
            `;
            chatArea.appendChild(userMessage);

            // Simulate AI response
            button.disabled = true;
            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            
            setTimeout(() => {
                const aiMessage = document.createElement('div');
                aiMessage.className = 'flex gap-2 justify-end';
                aiMessage.innerHTML = `
                    <div class="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                        <p>IA: Processando sua mensagem...</p>
                    </div>
                `;
                chatArea.appendChild(aiMessage);
                chatArea.scrollTop = chatArea.scrollHeight;
                
                input.value = '';
                button.disabled = false;
                button.textContent = 'enviar';
            }, 1000);
        }