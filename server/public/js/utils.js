const lib = {};

lib.showNotification = (message, type = 'info') => {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm transform translate-x-full transition-all duration-300`;

    // Set colors based on type
    const colors = {
        success: 'bg-green-600 text-white',
        error: 'bg-red-600 text-white',
        info: 'bg-blue-600 text-white',
        warning: 'bg-yellow-600 text-white'
    };

    notification.className += ` ${colors[type]}`;

    // Set content
    notification.innerHTML = `
    <div class="flex items-start space-x-3">
        <div class="flex-shrink-0">
            ${type === 'success' ? '✅' : type === 'error' ? '❌' : type === 'warning' ? '⚠️' : 'ℹ️'}
        </div>
        <div class="flex-1">
            <p class="text-sm font-medium">${message}</p>
        </div>
        <button onclick="this.parentElement.parentElement.remove()" class="flex-shrink-0 text-white/80 hover:text-white">
            <span class="text-lg">×</span>
        </button>
    </div>
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(full)';
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

lib.fetchAPI = async ({
    query = {},
    method = "GET",
    headers = {},
    body,
    router = ""
}) => {

    const {
        search,
        catalogue,
        productID,
        userInterest,
        apiKey
    } = query;

    try {
        const url = new URL(`http://127.0.0.1:3000/${router}`);

        if (search) url.searchParams.append("search", search);
        if (catalogue) url.searchParams.append("catalogue", catalogue);
        if (productID) url.searchParams.append("productID", productID);
        if (userInterest) url.searchParams.append("userInterest", userInterest);
        if (apiKey) url.searchParams.append("apiKey", apiKey);

        const options = {
            method,
            headers: {
                "Content-Type": "application/json",
                ...headers
            }
        };

        if (method !== "GET" && body) {
            options.body = JSON.stringify(body);
        }

        const res = await fetch(url, options);
        const data = await res.json();

        // HTTP Error
        if (!res.ok) {
            throw new Error(data.message || res.statusText);
        }

        // API-level Error
        if (data.success === false) {
            throw new Error(data.message || "API Error");
        }

        return data;

    } catch (error) {
        if (typeof lib.showNotification === "function") {
            lib.showNotification("Fetch Error: " + error.message);
        } else {
            console.error("Fetch Error:", error.message);
        }
        throw error;
    }
};


lib.showLoadingState = (buttonSelector) => {
    buttonSelector.innerHTML = `
    <div class="text-center ">
        <div class="sm-text loading-spinner mx-auto "></div>
    </div>
`

    return () => {
        buttonSelector.innerHTML = ``
    };
}
lib.addEventListener = (
    [selector, event = "click", oneCall = false],
    callBack
) => {
    try {
        if (typeof selector !== "string" || !selector.length) {
            throw new Error("Invalid selector");
        }

        if (oneCall) {
            callBack(null, null, null, null);
            return;
        }

        // ID selector
        if (selector[0] === "#") {
            const el = document.querySelector(selector);
            if (!el) throw new Error("Element not found");

            el.addEventListener(event, (e) => {
                e.preventDefault();
                callBack(el.dataset?.id || null, el, e, null);
            });
            return;
        }

        // Multiple elements (class / tag)
        const elements = document.querySelectorAll(selector);
        if (!elements.length) throw new Error("Elements not found");

        elements.forEach(el => {
            el.addEventListener(event, (e) => {
                e.preventDefault();
                callBack(el.dataset?.id || null, el, e, elements);
            });
        });

    } catch (error) {
        lib.showNotification(error.message);
    }
};


export default lib;

// nav_item.forEach((element, i) => {
//   element.addEventListener("click", (e) => {
//     e.preventDefault();

//     // সব nav থেকে active সরাও
//     nav_item.forEach(nav => nav.classList.remove("active"));

//     // সব section hide করো
//     section.forEach(sec => {
//       sec.classList.remove("active");
//       sec.classList.add("hidden");
//     });

//     // clicked nav active
//     element.classList.add("active");

//     // matching section show
//     section[i].classList.add("active");
//     section[i].classList.remove("hidden");
//   });
// });
