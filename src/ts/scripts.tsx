const $ = document.querySelector.bind(document);
const $$ = (selector: string) => document.querySelectorAll(selector) as NodeListOf<HTMLElement>;

/**
 * JS toggle
 *
 * Cách dùng:
 * <button class="js-toggle" toggle-target="#box">Click</button>
 * <div id="box">Content show/hide</div>
 */
window.addEventListener("template-loaded", initJsToggle);

function initJsToggle() {
    $$(".js-toggle").forEach((button) => {
        const target = button.getAttribute("toggle-target");
        if (!target) {
            document.body.innerText = `Cần thêm toggle-target cho: ${button.outerHTML}`;
        } else {
            const targetElement = $(target);
            if (!targetElement) {
                return (document.body.innerText = `Không tìm thấy phần tử "${target}"`);
            }
            const isHidden = targetElement.classList.contains("hide");

            requestAnimationFrame(() => {
                targetElement.classList.toggle("hide", !isHidden);
                targetElement.classList.toggle("show", isHidden);
            });
        }
    });
}

