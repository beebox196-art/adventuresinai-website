#!/usr/bin/env python3
import re, sys

def extract_text(filepath):
    with open(filepath) as f:
        content = f.read()
    # Remove scripts and styles
    content = re.sub(r'<(script|style)[^>]*>.*?</\1>', '', content, flags=re.DOTALL|re.IGNORECASE)
    # Extract headings
    headings = re.findall(r'<h[1-4][^>]*>(.*?)</h[1-4]>', content, re.DOTALL)
    # Extract paragraphs
    paras = re.findall(r'<p[^>]*>(.*?)</p>', content, re.DOTALL)
    # Extract list items
    lis = re.findall(r'<li[^>]*>(.*?)</li>', content, re.DOTALL)
    
    print(f'\n=== {filepath} ===')
    print('HEADINGS:')
    for h in headings:
        text = re.sub(r'<[^>]+>', '', h).strip()
        if text:
            print(f'  {text}')
    print('\nKEY PARAGRAPHS (over 40 chars):')
    for p in paras:
        text = re.sub(r'<[^>]+>', '', p).strip()
        if text and len(text) > 40:
            print(f'  {text[:250]}')
    print('\nLIST ITEMS:')
    for li in lis:
        text = re.sub(r'<[^>]+>', '', li).strip()
        if text and len(text) > 20:
            print(f'  - {text[:200]}')

files = ['index.html','understanding-ai.html','proof.html','services.html','build-with-us.html','contact.html','case-study-openclaw.html','case-studies.html']
for f in files:
    try:
        extract_text(f)
    except FileNotFoundError:
        print(f'\n=== {f} === (NOT FOUND)')