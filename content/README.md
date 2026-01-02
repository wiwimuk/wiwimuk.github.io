# 內容管理說明

本專案使用 YAML 檔案來管理學習筆記內容。

## 資料夾結構

```
content/
  notes/        # 學習筆記資料夾
    *.yaml      # 每個 YAML 檔案對應一篇學習筆記
```

## 學習筆記格式

在 `content/notes/` 資料夾中，每個 YAML 檔案對應一篇學習筆記。檔案名稱（不含副檔名）會自動成為該筆記的 URL slug。

### YAML 檔案範例

```yaml
id: "1"
title: "微積分學習筆記 - 極限與連續"
category: "數學"
tags:
  - "微積分"
  - "極限"
  - "連續"
date: "2024-11-05"
readTime: "8 分鐘"
imageUrl: "/attached_assets/generated_images/Math_notes_image_aaa165c2.png"
content: |
  # 微積分學習筆記

  這是學習筆記內容，可以使用 Markdown 語法撰寫。

  ## 重點整理

  - 重點一
  - 重點二

  ### 詳細說明

  這裡可以寫更詳細的內容...
```

### 欄位說明

- `id`: 筆記的唯一識別碼（字串）
- `title`: 筆記標題
- `category`: 分類（例如：數學、程式設計等）
- `tags`: 標籤列表（陣列）
- `date`: 發布日期（格式：YYYY-MM-DD）
- `readTime`: 閱讀時間（字串，例如："8 分鐘"）
- `imageUrl`: 封面圖片 URL（可選，必須以 `/attached_assets/` 開頭）
- `content`: 筆記內容（支援 Markdown 語法）

### 重要注意事項

1. **檔案名稱 = URL slug**：YAML 檔案的名稱（不含 `.yaml` 或 `.yml`）會自動成為該筆記的 URL slug。例如：`微積分學習筆記-極限與連續.yaml` 的 URL 會是 `/note/微積分學習筆記-極限與連續`。

2. **Markdown 支援**：`content` 欄位支援完整的 Markdown 語法，包括：
   - 標題（#、##、###）
   - 列表（有序和無序）
   - 程式碼區塊（```）
   - 粗體、斜體
   - 連結
   - 等等

3. **圖片路徑**：`imageUrl` 必須以 `/attached_assets/` 開頭，圖片檔案應放在 `client/public/attached_assets/` 資料夾中。

## 生成內容

在開發或建置前，需要先執行內容生成腳本：

```bash
npm run content:generate
```

這個腳本會：
1. 讀取 `content/notes/` 資料夾中的所有 YAML 檔案
2. 為每個筆記自動生成 `slug`（基於檔案名稱）
3. 驗證圖片 URL 是否正確
4. 將所有筆記合併成一個 JSON 檔案（`client/src/data/content.json`）
5. 按日期排序（最新的在前）

## 開發流程

1. 在 `content/notes/` 資料夾中新增或編輯 YAML 檔案
2. 執行 `npm run content:generate` 生成內容
3. 執行 `npm run dev` 啟動開發伺服器
4. 在瀏覽器中查看學習筆記

## 建置流程

執行 `npm run build` 時會自動執行內容生成，無需手動執行。

