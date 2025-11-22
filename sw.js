self.addEventListener("install", event => {
  console.log("Service Worker: install");
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  console.log("Service Worker: activate");
});

// Push通知受信処理
self.addEventListener("push", event => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || "通知タイトル";
  const options = {
    body: data.body || "通知本文",
    icon: "icon.png"
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

// 通知クリック処理
self.addEventListener("notificationclick", event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow("/") // 通知クリックでトップページへ
  );
});