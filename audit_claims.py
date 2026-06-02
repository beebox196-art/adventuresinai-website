#!/usr/bin/env python3
"""Extract key claims from AIAI website HTML files for tone audit."""
import re

files = {
    'index.html': 'Home',
    'understanding-ai.html': 'Understanding AI',
    'proof.html': 'Proof',
    'services.html': 'Services',
    'build-with-us.html': 'Build With Us',
    'contact.html': 'Contact',
    'case-study-openclaw.html': 'Case Study: OpenClaw',
    'case-studies.html': 'Case Studies Landing'
}

# Words/phrases that signal potential over-promising
absolutes = ['never', 'always', 'zero', 'all', 'every', 'no one', 'nobody', 'nothing', 'guarantee', 'instant', 'seamless', 'effortless', 'simply', 'just', 'automatically', 'without any', 'no manual', 'no human', 'without prompting', 'without intervention']

overpromise_phrases = [
    'never miss', 'no important', 'no missed', 'without human', 'zero human',
    'runs without', 'without prompting', 'every day', 'every cycle',
    'operational within days', 'results visible in days', 'pays for itself',
    'it just works', 'all your', 'complete', 'full', 'entire',
    'prove it', 'we can prove', 'we know it does',
    'no preparation needed', 'within 24 hours', 'instantly',
    'fully autonomous', 'completely autonomous',
]

qualifiers = ['may', 'might', 'can', 'could', 'typically', 'usually', 'often', 'generally', 'in most cases', 'tend to']

for filename, page_name in files.items():
    try:
        with open(filename) as f:
            content = f.read()
        # Remove scripts and styles
        content = re.sub(r'<(script|style)[^>]*>.*?</\1>', '', content, flags=re.DOTALL|re.IGNORECASE)
        # Extract visible text
        text = re.sub(r'<[^>]+>', ' ', content)
        text = re.sub(r'\s+', ' ', text).strip()
        
        print(f'\n{"="*60}')
        print(f'PAGE: {page_name} ({filename})')
        print(f'{"="*60}')
        
        # Find sentences with absolutes
        sentences = re.split(r'[.!?]', text)
        flagged = []
        for s in sentences:
            s = s.strip()
            if len(s) < 20:
                continue
            s_lower = s.lower()
            for word in absolutes:
                if f' {word} ' in f' {s_lower} ' or s_lower.startswith(word + ' '):
                    flagged.append((s, f'Absolute: "{word}"'))
                    break
            for phrase in overpromise_phrases:
                if phrase.lower() in s_lower:
                    flagged.append((s, f'Over-promise phrase: "{phrase}"'))
                    break
        
        if flagged:
            print('\nFLAGGED CLAIMS:')
            for claim, reason in flagged:
                print(f'\n  [{reason}]')
                print(f'  "{claim[:200]}"')
        else:
            print('\n  No flagged claims found.')
            
    except FileNotFoundError:
        print(f'\n  FILE NOT FOUND: {filename}')