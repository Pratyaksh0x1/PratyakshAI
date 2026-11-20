import os
import random
from PIL import Image, ImageDraw, ImageFont, ImageEnhance

CARD_W = 1024
CARD_H = 1440

def get_font(size, bold=False):
    font_names = []
    if bold:
        font_names = [
            "C:/Windows/Fonts/segoeuib.ttf",
            "C:/Windows/Fonts/arialbd.ttf",
            "C:/Windows/Fonts/calibrib.ttf"
        ]
    else:
        font_names = [
            "C:/Windows/Fonts/segoeui.ttf",
            "C:/Windows/Fonts/arial.ttf",
            "C:/Windows/Fonts/calibri.ttf"
        ]
    for fn in font_names:
        if os.path.exists(fn):
            try:
                return ImageFont.truetype(fn, size)
            except Exception:
                pass
    return ImageFont.load_default()

def generate_card_front():
    # Crisp brilliant pure white card
    im = Image.new("RGBA", (CARD_W, CARD_H), (255, 255, 255, 255))
    draw = ImageDraw.Draw(im)

    # Outer clean crisp border
    draw.rounded_rectangle([18, 18, CARD_W - 18, CARD_H - 18], radius=44, outline=(228, 231, 236, 255), width=3)

    # Top header bar (below punch slot) - deep charcoal / black
    draw.rounded_rectangle([32, 195, CARD_W - 32, 295], radius=16, fill=(18, 20, 24, 255))

    font_badge = get_font(34, bold=True)
    font_sub = get_font(21, bold=True)

    draw.text((64, 216), "ENGINEERING IDENTIFICATION", fill=(255, 255, 255, 255), font=font_badge)
    draw.text((64, 258), "PRATYAKSH TOMAR  ✦  BATCH 2027", fill=(234, 138, 60, 255), font=font_sub)

    # Chip badge
    draw.rounded_rectangle([CARD_W - 170, 218, CARD_W - 56, 272], radius=10, fill=(30, 32, 38, 255), outline=(234, 138, 60, 255), width=2)
    draw.text((CARD_W - 150, 232), "DEV 0x1", fill=(255, 255, 255, 255), font=get_font(22, bold=True))

    # Photo processing
    photo_path = "assets/1.jpeg"
    if os.path.exists(photo_path):
        user_photo = Image.open(photo_path).convert("RGBA")
        enhancer = ImageEnhance.Contrast(user_photo)
        user_photo = enhancer.enhance(1.05)
        enhancer_c = ImageEnhance.Color(user_photo)
        user_photo = enhancer_c.enhance(1.05)

        pw, ph = user_photo.size
        target_pw = 620
        target_ph = 620
        scale = max(target_pw / pw, target_ph / ph)
        rw, rh = int(pw * scale), int(ph * scale)
        user_photo = user_photo.resize((rw, rh), Image.Resampling.LANCZOS)
        left = (rw - target_pw) // 2
        top = int((rh - target_ph) * 0.28)
        cropped_photo = user_photo.crop((left, top, left + target_pw, top + target_ph))

        px = (CARD_W - target_pw) // 2
        py = 325

        # Photo mask
        mask = Image.new("L", (target_pw, target_ph), 0)
        mask_draw = ImageDraw.Draw(mask)
        mask_draw.rounded_rectangle([0, 0, target_pw, target_ph], radius=28, fill=255)

        # Border/Frame
        draw.rounded_rectangle([px - 4, py - 4, px + target_pw + 4, py + target_ph + 4], radius=32, fill=(220, 224, 232, 255))
        draw.rounded_rectangle([px - 2, py - 2, px + target_pw + 2, py + target_ph + 2], radius=30, fill=(255, 255, 255, 255))

        im.paste(cropped_photo, (px, py), mask)

        # Active status pill
        draw.rounded_rectangle([px + 22, py + 22, px + 175, py + 66], radius=18, fill=(18, 20, 24, 240))
        draw.ellipse([px + 36, py + 37, px + 52, py + 53], fill=(34, 197, 94, 255))
        draw.text((px + 62, py + 31), "ONLINE", fill=(255, 255, 255, 255), font=get_font(21, bold=True))

    # Name and Title
    text_y = 975
    font_name = get_font(62, bold=True)
    draw.text((CARD_W // 2, text_y), "Pratyaksh Tomar", fill=(18, 20, 26, 255), font=font_name, anchor="mt")

    font_role = get_font(30, bold=True)
    draw.text((CARD_W // 2, text_y + 72), "ASPIRING SOFTWARE ENGINEER", fill=(217, 72, 5, 255), font=font_role, anchor="mt")

    # Tags / Skills
    tags = ["AI & Agents", "Full-Stack Dev", "Systems Software", "Python / C++"]
    tag_font = get_font(23, bold=True)
    pill_y = text_y + 130
    pill_w = 205
    pill_h = 46
    total_tags_w = len(tags) * pill_w + (len(tags) - 1) * 16
    start_tag_x = (CARD_W - total_tags_w) // 2
    for i, tag in enumerate(tags):
        tx = start_tag_x + i * (pill_w + 16)
        draw.rounded_rectangle([tx, pill_y, tx + pill_w, pill_y + pill_h], radius=23, fill=(248, 250, 252, 255), outline=(218, 224, 233, 255), width=2)
        draw.text((tx + pill_w // 2, pill_y + 11), tag, fill=(30, 41, 59, 255), font=tag_font, anchor="mt")

    # Barcode section
    draw.line([(50, 1215), (CARD_W - 50, 1215)], fill=(228, 231, 236, 255), width=2)

    bc_x = 60
    bc_y = 1245
    rng = random.Random(42)
    while bc_x < 560:
        bw = rng.choice([2, 3, 5, 8, 12])
        draw.rectangle([bc_x, bc_y, bc_x + bw, bc_y + 85], fill=(18, 20, 26, 255))
        bc_x += bw + rng.choice([3, 5, 7, 9])

    draw.text((60, bc_y + 95), "PASS ID: PT-2027-0X1-CSE", fill=(100, 116, 139, 255), font=get_font(20, bold=True))

    draw.text((620, 1245), "LOCATION", fill=(120, 130, 145, 255), font=get_font(18, bold=True))
    draw.text((620, 1272), "Ghaziabad, India", fill=(18, 20, 26, 255), font=get_font(24, bold=True))
    draw.text((620, 1315), "ACCESS CLEARANCE", fill=(120, 130, 145, 255), font=get_font(18, bold=True))
    draw.text((620, 1342), "LEVEL ✦ ALL-ACCESS", fill=(217, 72, 5, 255), font=get_font(22, bold=True))

    im.save("assets/card-front.png", "PNG")
    print("Updated assets/card-front.png to crisp white")

def generate_card_back():
    im = Image.new("RGBA", (CARD_W, CARD_H), (255, 255, 255, 255))
    draw = ImageDraw.Draw(im)

    draw.rounded_rectangle([18, 18, CARD_W - 18, CARD_H - 18], radius=44, outline=(228, 231, 236, 255), width=3)

    # Magnetic stripe - black
    draw.rectangle([20, 205, CARD_W - 20, 335], fill=(15, 17, 21, 255))

    # Signature band
    draw.rounded_rectangle([50, 385, CARD_W - 50, 510], radius=14, fill=(245, 247, 250, 255), outline=(220, 225, 235, 255), width=1)
    draw.text((75, 405), "AUTHORIZED SIGNATURE / VERIFIED HOLDER", fill=(110, 120, 135, 255), font=get_font(18, bold=True))
    draw.text((95, 435), "Pratyaksh Tomar ✦", fill=(28, 55, 140, 255), font=get_font(48, bold=True))

    draw.rounded_rectangle([CARD_W - 240, 405, CARD_W - 70, 490], radius=10, fill=(234, 138, 60, 240))
    draw.text((CARD_W - 225, 435), "SECURITY CHIP", fill=(255, 255, 255, 255), font=get_font(20, bold=True))

    # Return info
    draw.text((50, 550), "IF FOUND, PLEASE RETURN TO:", fill=(217, 72, 5, 255), font=get_font(28, bold=True))

    info_items = [
        ("Holder", "Pratyaksh Tomar — Software Engineer"),
        ("Email", "Pratyakshtomar2000@gmail.com"),
        ("GitHub", "github.com/Pratyaksh0x1"),
        ("LinkedIn", "linkedin.com/in/pratyaksh-tomar-112bb6337"),
        ("Portfolio", "pratyaksh-ai-ten.vercel.app"),
        ("Status", "Authorized for Software Engineering & AI Research.")
    ]

    curr_y = 615
    f_lbl = get_font(20, bold=True)
    f_val = get_font(25, bold=False)
    for label, val in info_items:
        draw.text((50, curr_y), label.upper(), fill=(110, 120, 135, 255), font=f_lbl)
        draw.text((210, curr_y - 2), val, fill=(18, 20, 26, 255), font=f_val)
        draw.line([(50, curr_y + 42), (CARD_W - 50, curr_y + 42)], fill=(230, 235, 242, 255), width=1)
        curr_y += 68

    # Mission box
    draw.rounded_rectangle([50, 1045, CARD_W - 50, 1185], radius=16, fill=(245, 247, 250, 255), outline=(220, 225, 235, 255), width=1)
    draw.text((80, 1070), "DEVELOPER ETHOS", fill=(234, 138, 60, 255), font=get_font(21, bold=True))
    quote = '"Passionate about crafting clean code, solving complex problems,\nand building impactful software."'
    draw.text((80, 1108), quote, fill=(45, 55, 72, 255), font=get_font(25, bold=False))

    # Barcode
    bc_x = 50
    bc_y = 1240
    rng = random.Random(99)
    while bc_x < CARD_W - 50:
        bw = rng.choice([3, 5, 7, 10, 14])
        draw.rectangle([bc_x, bc_y, bc_x + bw, bc_y + 75], fill=(18, 20, 26, 255))
        bc_x += bw + rng.choice([3, 5, 8, 10])

    draw.text((CARD_W // 2, 1340), "* PT-DEV-CLEARANCE-LEVEL-5-ACCESS-GRANTED *", fill=(120, 130, 145, 255), font=get_font(21, bold=True), anchor="mt")

    im.save("assets/card-back.png", "PNG")
    print("Updated assets/card-back.png to crisp white")

def generate_strap_image():
    sw = 1200
    sh = 256
    im = Image.new("RGBA", (sw, sh), (20, 22, 28, 255))
    draw = ImageDraw.Draw(im)

    for x in range(0, sw, 18):
        draw.line([(x, 14), (x + 10, 14)], fill=(234, 138, 60, 240), width=4)
        draw.line([(x, sh - 15), (x + 10, sh - 15)], fill=(234, 138, 60, 240), width=4)

    font = get_font(60, bold=True)
    text = "PRATYAKSH TOMAR  ✦  SOFTWARE ENGINEER  ✦  "
    draw.text((25, sh // 2 - 38), text, fill=(255, 255, 255, 255), font=font)

    im.save("assets/strap.png", "PNG")
    print("Updated assets/strap.png")

if __name__ == "__main__":
    generate_card_front()
    generate_card_back()
    generate_strap_image()
