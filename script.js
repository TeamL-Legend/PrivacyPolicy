document.addEventListener('DOMContentLoaded', () => {
    const privacyText = document.getElementById('privacy-text');
    const policyText = document.getElementById('policy-text');
    const appleLogo = document.querySelector('.apple-logo img');
    const privacyPolicyContent = document.querySelector('.privacy-policy-content');
    const privacyWord = 'Privacy';
    const policyWord = 'Policy';

    function animateText(element, text, isWholeWord = false) {
        return new Promise(resolve => {
            element.style.opacity = 1;
            
            if (isWholeWord) {
                // Animate the whole word at once with a fade-in effect
                element.textContent = text;
                element.style.transition = 'opacity 1s ease';
                element.style.opacity = 1;
                resolve();
                return;
            }

            let index = 0;
            const typing = setInterval(() => {
                if (index < text.length) {
                    // Slower and more gradual typing with longer delays
                    const delays = [150, 200, 180, 160, 190, 170, 210];
                    element.textContent += text[index];
                    index++;
                    
                    // Even softer opacity increase for smoother, slower appearance
                    element.style.transition = 'opacity 0.5s ease';
                    element.style.opacity = Math.min(1, parseFloat(element.style.opacity) + 0.05);
                } else {
                    clearInterval(typing);
                    resolve();
                }
            }, 150); // Significantly slower base interval
        });
    }

    async function showContent() {
        // More fluid Privacy text animation with subtle variation
        await animateText(privacyText, privacyWord);
        
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Policy text now appears as a whole word with fade-in
        await animateText(policyText, policyWord, true);
        
        await new Promise(resolve => {
            setTimeout(() => {
                appleLogo.style.opacity = 1;
                resolve();
            }, 500);
        });

        await new Promise(resolve => {
            setTimeout(() => {
                privacyPolicyContent.style.opacity = 1;
                const listItems = privacyPolicyContent.querySelectorAll('li');
                listItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = 1;
                        item.style.transform = 'translateX(0)';
                    }, index * 200);
                });
                resolve();
            }, 500);
        });
    }

    showContent();
});