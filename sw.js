self.addEventListener("install", event => {
  console.log("Service Worker: install");
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  console.log("Service Worker: activate");
});

// 通知処理は削除。PushCodeが担当する。
